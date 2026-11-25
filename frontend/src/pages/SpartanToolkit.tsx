import { Link } from 'react-router-dom'
import {
  LayoutTemplate,
  Calculator,
  FolderOpen,
  ArrowRight,
} from 'lucide-react'
import PortalLayout from '../components/PortalLayout'
import '../styles/salesStudio.css'

function SpartanToolkit() {
  return (
    <PortalLayout portal="spartan">
      <section className="vz-toolkit">
        <header className="vz-toolkit-header">
          <span className="vz-eyebrow">FIELD SALES RESOURCES</span>
          <h1>Spartan Tool Kit</h1>
          <p>
            Everything you need to prepare, present, and
            execute in the field.
          </p>
        </header>

        <div className="vz-toolkit-grid">
          <Link
            to="/spartan/toolkit/sales-studio"
            className="vz-toolkit-card"
          >
            <div className="vz-toolkit-icon">
              <LayoutTemplate size={28} />
            </div>

            <span className="vz-toolkit-label">
              SALES ENABLEMENT
            </span>

            <h2>VIVAZEN Sales Studio</h2>

            <p>
              Create customized product sales sheets
              using standardized brand templates.
            </p>

            <div className="vz-toolkit-action">
              Open Sales Studio
              <ArrowRight size={18} />
            </div>
          </Link>

          <div className="vz-toolkit-card vz-toolkit-disabled">
            <div className="vz-toolkit-icon">
              <Calculator size={28} />
            </div>

            <span className="vz-toolkit-label">
              COMING SOON
            </span>

            <h2>Pricing Calculator</h2>

            <p>
              Calculate wholesale pricing, retailer
              margins, and promotional scenarios.
            </p>
          </div>

          <div className="vz-toolkit-card vz-toolkit-disabled">
            <div className="vz-toolkit-icon">
              <FolderOpen size={28} />
            </div>

            <span className="vz-toolkit-label">
              COMING SOON
            </span>

            <h2>Sales Resource Library</h2>

            <p>
              Access approved sales materials,
              product resources, and brand assets.
            </p>
          </div>
        </div>
      </section>
    </PortalLayout>
  )
}

export default SpartanToolkit