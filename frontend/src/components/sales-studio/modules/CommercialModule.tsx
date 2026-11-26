
import type { LucideIcon } from 'lucide-react'

export type CommercialVariant =
  | 'standard'
  | 'condensed'
  | 'stacked'

export type CommercialMetric = {
  icon: LucideIcon
  label: string
  shortLabel?: string
  value: string
  detail?: string
}

type CommercialModuleProps = {
  title: string
  icon: LucideIcon
  metrics: CommercialMetric[]
  variant?: CommercialVariant
  className?: string
}

function CommercialModule({
  title,
  icon: HeadingIcon,
  metrics,
  variant = 'standard',
  className = '',
}: CommercialModuleProps) {

  return (
    <section
      className={[
        'vz-pricing-module',
        `vz-commercial-${variant}`,
        className,
      ].filter(Boolean).join(' ')}
      data-fit-region
    >

      <div className="vz-pricing-heading">
        <HeadingIcon />
        <span>{title}</span>
      </div>

      <div className="vz-pricing-grid">

        {metrics.map((metric) => {
          const MetricIcon = metric.icon

          return (
            <div
              className="vz-pricing-item"
              key={metric.label}
            >

              <MetricIcon />

              <div>
                <span>
                  {variant === 'condensed'
                    ? metric.shortLabel ?? metric.label
                    : metric.label}
                </span>

                <strong>{metric.value}</strong>

                {variant === 'standard' && metric.detail && (
                  <small>{metric.detail}</small>
                )}
              </div>

            </div>
          )
        })}

      </div>

    </section>
  )
}

export default CommercialModule
