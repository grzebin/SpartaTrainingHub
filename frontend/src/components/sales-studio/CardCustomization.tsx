import type { CardConfig } from './cardConfig'

type CardCustomizationProps = {
  config: CardConfig
  onChange: (config: CardConfig) => void
}

function CardCustomization({
  config,
  onChange,
}: CardCustomizationProps) {

  const controls: {
    key: keyof CardConfig
    label: string
    available: boolean
  }[] = [
    {
      key: 'showDisplay',
      label: 'Retail display photography',
      available: true,
    },
    {
      key: 'showDescription',
      label: 'Product description',
      available: import.meta.env.DEV,
    },
    {
      key: 'showBenefits',
      label: 'Benefit callouts',
      available: import.meta.env.DEV,
    },
    {
      key: 'showIngredients',
      label: 'Ingredient specifications',
      available: true,
    },
    {
      key: 'showPackaging',
      label: 'Packaging specifications',
      available: true,
    },
    {
      key: 'showPricing',
      label: 'Standard pricing',
      available: false,
    },
    {
      key: 'showProfitability',
      label: 'Retailer profitability',
      available: false,
    },
    {
      key: 'showPromotion',
      label: 'Promotional pricing',
      available: false,
    },
  ]

  return (
    <div className="vz-customization-controls">

      {controls.map((control) => (
        <label
          key={control.key}
          className={
            `vz-module-control ${
              !control.available
                ? 'vz-module-disabled'
                : ''
            }`
          }
        >
          <input
            type="checkbox"
            checked={config[control.key]}
            disabled={!control.available}
            onChange={(event) =>
              onChange({
                ...config,
                [control.key]: event.target.checked,
              })
            }
          />

          <span>{control.label}</span>

          {!control.available && (
            <small>SOON</small>
          )}
        </label>
      ))}

    </div>
  )
}

export default CardCustomization
