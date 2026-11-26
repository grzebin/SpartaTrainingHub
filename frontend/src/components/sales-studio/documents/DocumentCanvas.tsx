
import type { CSSProperties, ReactNode } from 'react'

import {
  DOCUMENT_SIZE,
  DOCUMENT_HEADER,
  DOCUMENT_HEADER_BAND,
  DOCUMENT_FOOTER,
} from './documentTemplates'

import type {
  DocumentTemplate,
  DocumentRect,
  DocumentSlot,
} from './documentTemplates'

import wordmark from '../../../assets/sales-studio/brand/vivazen-wordmark-black.png'

type DocumentCanvasProps = {
  template: DocumentTemplate
  title?: string
  renderSlot?: (slot: DocumentSlot) => ReactNode
}

function position(rect: DocumentRect): CSSProperties {
  return {
    position: 'absolute',
    left: `${rect.x / DOCUMENT_SIZE.width * 100}%`,
    top: `${rect.y / DOCUMENT_SIZE.height * 100}%`,
    width: `${rect.width / DOCUMENT_SIZE.width * 100}%`,
    height: `${rect.height / DOCUMENT_SIZE.height * 100}%`,
  }
}

function DocumentCanvas({
  template,
  title = 'Product Selection',
  renderSlot,
}: DocumentCanvasProps) {
  return (
    <div
      className="vz-document-page"
      aria-label={template.name}
    >
      <header
        className="vz-document-header"
        style={position(DOCUMENT_HEADER)}
      >
        <img src={wordmark} alt="VIVAZEN" />
      </header>

      <div
        className="vz-document-title"
        style={position(DOCUMENT_HEADER_BAND)}
      >
        {title}
      </div>

      {template.categoryBands.map((band, index) => (
        <div
          key={`category-${index}`}
          className="vz-document-category"
          style={position(band)}
        >
          Category {index + 1}
        </div>
      ))}

      {template.slots.map((slot) => (
        <div
          key={slot.id}
          className={`vz-document-slot vz-document-slot-${slot.kind}`}
          style={position(slot)}
        >
          {renderSlot ? renderSlot(slot) : (
            <div className="vz-document-placeholder">
              <strong>
                {slot.kind === 'promotion'
                  ? 'Approved Promotional Offer'
                  : slot.id.replace('-', ' ')}
              </strong>

              <span>
                {slot.kind === 'product'
                  ? slot.format
                  : 'Reserved promotional slot'}
              </span>

              <small>
                {slot.width} × {slot.height} px
              </small>
            </div>
          )}
        </div>
      ))}

      <footer
        className="vz-document-footer"
        style={position(DOCUMENT_FOOTER)}
      >
        <div>
          <strong>Your Sales Representative</strong>
          <span>Contact information</span>
        </div>

        <div className="vz-document-qr-placeholder">
          QR
        </div>
      </footer>
    </div>
  )
}

export default DocumentCanvas
