import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  LayoutTemplate,
  Package,
  FileText,
  Settings2,
} from 'lucide-react'

import PortalLayout from '../components/PortalLayout'

import CompactCard from '../components/sales-studio/cards/CompactCard'
import WideCard from '../components/sales-studio/cards/WideCard'
import PortraitCard from '../components/sales-studio/cards/PortraitCard'
import SquareCard from '../components/sales-studio/cards/SquareCard'
import TallCard from '../components/sales-studio/cards/TallCard'
import ExtraTallCard from '../components/sales-studio/cards/ExtraTallCard'

import CardCustomization from '../components/sales-studio/CardCustomization'

import {
  cardFormats,
} from '../components/sales-studio/cardFormats'

import type {
  CardFormatId,
} from '../components/sales-studio/cardFormats'

import {
  defaultCardConfig,
} from '../components/sales-studio/cardConfig'

import type {
  CardConfig,
} from '../components/sales-studio/cardConfig'

import {
  salesStudioProducts,
} from '../data/salesStudioProducts'

import '../styles/salesStudio.css'
import '../styles/salesStudioWide.css'
import '../styles/salesStudioPortrait.css'
import '../styles/salesStudioSquare.css'
import '../styles/salesStudioExtraTall.css'

function SalesStudio() {

  const [selectedProduct, setSelectedProduct] =
    useState('energy-focus')

  const [selectedFormat, setSelectedFormat] =
    useState<CardFormatId>('compact')

  const [config, setConfig] =
    useState<CardConfig>({ ...defaultCardConfig })

  const product =
    salesStudioProducts.find(
      (item) => item.id === selectedProduct
    ) ?? salesStudioProducts[0]

  const format =
    cardFormats.find(
      (item) => item.id === selectedFormat
    ) ?? cardFormats[0]

  const cardProps = {
    product,
    showSpecifications: config.showPackaging,
    showDisplay: config.showDisplay,
    showIngredients: config.showIngredients,
    showDescription: config.showDescription,
    showBenefits: config.showBenefits,
  }

  return (
    <PortalLayout portal="spartan">

      <section className="vz-studio">

        <Link
          to="/spartan/toolkit"
          className="vz-back-link"
        >
          <ArrowLeft size={16} />
          Back to Spartan Tool Kit
        </Link>

        <header className="vz-studio-header">

          <div>
            <span className="vz-eyebrow">
              VIVAZEN FIELD SALES
            </span>

            <h1>Sales Studio</h1>

            <p>
              Build professional, brand-consistent
              sales materials.
            </p>
          </div>

          <span className="vz-version">
            VERSION 0.4 — CARD LIBRARY
          </span>

        </header>

        <div className="vz-studio-workspace">

          <aside className="vz-studio-sidebar">

            <h2>Document Builder</h2>

            <div className="vz-studio-section">
              <LayoutTemplate size={20} />

              <div style={{ width: '100%' }}>

                <h3>Card Format</h3>

                <select
                  className="vz-product-select"
                  value={selectedFormat}
                  onChange={(event) =>
                    setSelectedFormat(
                      event.target.value as CardFormatId
                    )
                  }
                  aria-label="Select card format"
                >
                  {cardFormats.map((item) => (
                    <option
                      key={item.id}
                      value={item.id}
                      disabled={!item.available}
                    >
                      {item.name}
                      {!item.available ? ' — Coming soon' : ''}
                    </option>
                  ))}
                </select>

                <p>
                  {format.width} × {format.height} px
                </p>

              </div>
            </div>

            <div className="vz-studio-section">
              <Package size={20} />

              <div style={{ width: '100%' }}>

                <h3>Products</h3>

                <select
                  className="vz-product-select"
                  value={selectedProduct}
                  onChange={(event) =>
                    setSelectedProduct(event.target.value)
                  }
                  aria-label="Select product"
                >
                  {salesStudioProducts.map((item) => (
                    <option
                      key={item.id}
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>

              </div>
            </div>

            <div className="vz-studio-section">
              <Settings2 size={20} />

              <div style={{ width: '100%' }}>

                <h3>Customization</h3>

                <p>Select product card content.</p>

                <CardCustomization
                  config={config}
                  onChange={setConfig}
                />

                <button
                  type="button"
                  className="vz-reset-config"
                  onClick={() =>
                    setConfig({ ...defaultCardConfig })
                  }
                >
                  Reset to defaults
                </button>

              </div>
            </div>

            <div className="vz-studio-section">
              <FileText size={20} />

              <div>
                <h3>Document Details</h3>
                <p>Coming in a future release.</p>
              </div>
            </div>

          </aside>

          <div className="vz-studio-preview">

            <div className="vz-preview-toolbar">
              <span>PRODUCT CARD PREVIEW</span>

              <span>
                {format.name} — {format.width} × {format.height}
              </span>
            </div>

            <div className="vz-card-test-canvas">

             {selectedFormat === 'extra-tall'
              ? <ExtraTallCard {...cardProps} />
              : selectedFormat === 'tall'
             ? <TallCard {...cardProps} />
             : selectedFormat === 'square'
             ? <SquareCard {...cardProps} />
              : selectedFormat === 'portrait'
             ? <PortraitCard {...cardProps} />
              : selectedFormat === 'wide'
              ? <WideCard {...cardProps} />
              : <CompactCard {...cardProps} />
}

            </div>

          </div>

        </div>

      </section>

    </PortalLayout>
  )
}

export default SalesStudio