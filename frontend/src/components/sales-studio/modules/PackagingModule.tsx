import { Droplet, Layers, Package } from 'lucide-react'

import type {
  SalesStudioProduct,
} from '../../../data/salesStudioProducts'

type PackagingModuleProps = {
  product: SalesStudioProduct
}

function PackagingModule({
  product,
}: PackagingModuleProps) {
  const specs = product.specifications

  return (
    <div className="vz-compact-specifications">

      <div className="vz-compact-spec">
        <Droplet />
        <div>
          <strong>{specs.volumeMl} mL</strong>
          <span>
            {specs.volumeOz} fl oz per bottle
          </span>
        </div>
      </div>

      <div className="vz-compact-spec">
        <Layers />
        <div>
          <strong>
            {specs.servingsPerBottle} Servings
          </strong>
          <span>Per bottle</span>
        </div>
      </div>

      <div className="vz-compact-spec">
        <Package />
        <div>
          <strong>
            {specs.bottlesPerDisplay} Bottles
          </strong>
          <span>Per display</span>
        </div>
      </div>

    </div>
  )
}

export default PackagingModule