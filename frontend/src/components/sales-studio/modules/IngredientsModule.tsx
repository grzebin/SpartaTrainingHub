import { FlaskConical } from 'lucide-react'

import type {
  SalesStudioProduct,
} from '../../../data/salesStudioProducts'

type IngredientsModuleProps = {
  product: SalesStudioProduct
}

function IngredientsModule({
  product,
}: IngredientsModuleProps) {

  const formula = product.formulation

  const ingredients = [
    {
      label: formula.blendName,
      amount: formula.blendMgPerServing,
      unit: 'mg',
    },
    ...(formula.kavaExtractMgPerServing
      ? [{
          label: 'Kava Root Extract',
          amount: formula.kavaExtractMgPerServing,
          unit: 'mg',
        }]
      : []),
    ...(formula.lTheanineMgPerServing
      ? [{
          label: 'L-Theanine',
          amount: formula.lTheanineMgPerServing,
          unit: 'mg',
        }]
      : []),
  ]

  return (
    <section className="vz-ingredients-module">

      <div className="vz-module-heading">
        <FlaskConical />
        <span>Ingredient Specifications</span>
      </div>

      <div className="vz-ingredient-list">

        {ingredients.map((ingredient) => (
          <div
            className="vz-ingredient-row"
            key={ingredient.label}
          >
            <span>{ingredient.label}</span>

            <strong>
              {ingredient.amount.toLocaleString()}
              {' '}{ingredient.unit}
            </strong>
          </div>
        ))}

      </div>

      <div className="vz-ingredient-disclosure">
        Amounts per serving
        ({product.specifications.servingSizeMl} mL)
      </div>

    </section>
  )
}

export default IngredientsModule