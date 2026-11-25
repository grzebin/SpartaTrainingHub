import type {
  SalesStudioProduct,
} from '../../../data/salesStudioProducts'

import { previewContent } from '../previewContent'

type DescriptionModuleProps = {
  product: SalesStudioProduct
}

function DescriptionModule({
  product,
}: DescriptionModuleProps) {
  const { description, approvalStatus } = product.marketing

  const approved =
    approvalStatus === 'approved' &&
    description.trim().length > 0

  if (!approved && !import.meta.env.DEV) {
    return null
  }

  return (
    <section className="vz-description-module">

      {!approved && (
        <span className="vz-draft-label">
          DEVELOPMENT SAMPLE
        </span>
      )}

      <p>
        {approved
          ? description
          : previewContent.description}
      </p>

    </section>
  )
}

export default DescriptionModule