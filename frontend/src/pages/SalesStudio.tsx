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

import {
  salesStudioProducts,
} from '../data/salesStudioProducts'

import '../styles/salesStudio.css'

function SalesStudio() {
  const [selectedProduct, setSelectedProduct] =
    useState('energy-focus')

  const [showSpecifications, setShowSpecifications] =
    useState(true)

  const [showDisplay, setShowDisplay] =
    useState(true)

  const product =
    salesStudioProducts.find(
      (item) => item.id === selectedProduct
    ) ?? salesStudioProducts[0]

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
            VERSION 0.2 — CARD TEST
          </span>
        </header>

        <div className="vz-studio-workspace">

          <aside className="vz-studio-sidebar">
            <h2>Document Builder</h2>

            <div className="vz-studio-section">
              <LayoutTemplate size={20} />
              <div>
                <h3>Templates</h3>
                <p>Compact Card — 914 × 553</p>
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

              <div>
                <h3>Customization</h3>

                <label className="vz-control-checkbox">
                  <input
                    type="checkbox"
                    checked={showSpecifications}
                    onChange={(event) =>
                      setShowSpecifications(
                        event.target.checked
                      )
                    }
                  />
                  Show specifications
                </label>

                <label className="vz-control-checkbox">
                  <input
                    type="checkbox"
                    checked={showDisplay}
                    onChange={(event) =>
                      setShowDisplay(
                        event.target.checked
                      )
                    }
                  />
                  Show retail display
                </label>
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
              <span>Compact — 914 × 553</span>
            </div>

            <div className="vz-card-test-canvas">
              <CompactCard
                product={product}
                showSpecifications={showSpecifications}
                showDisplay={showDisplay}
              />
            </div>
          </div>

        </div>
      </section>
    </PortalLayout>
  )
}

export default SalesStudio
