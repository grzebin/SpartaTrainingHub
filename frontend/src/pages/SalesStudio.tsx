import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  LayoutTemplate,
  Package,
  FileText,
  Settings2,
} from 'lucide-react'
import PortalLayout from '../components/PortalLayout'
import '../styles/salesStudio.css'

function SalesStudio() {
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
            VERSION 0.1
          </span>
        </header>

        <div className="vz-studio-workspace">

          <aside className="vz-studio-sidebar">
            <h2>Document Builder</h2>

            <div className="vz-studio-section">
              <LayoutTemplate size={20} />
              <div>
                <h3>Templates</h3>
                <p>Select a sales sheet layout.</p>
              </div>
            </div>

            <div className="vz-studio-section">
              <Package size={20} />
              <div>
                <h3>Products</h3>
                <p>Configure product selections.</p>
              </div>
            </div>

            <div className="vz-studio-section">
              <Settings2 size={20} />
              <div>
                <h3>Customization</h3>
                <p>Configure document content.</p>
              </div>
            </div>

            <div className="vz-studio-section">
              <FileText size={20} />
              <div>
                <h3>Document Details</h3>
                <p>Add representative information.</p>
              </div>
            </div>
          </aside>

          <div className="vz-studio-preview">
            <div className="vz-preview-toolbar">
              <span>DOCUMENT PREVIEW</span>
              <span>US Letter — 8.5 × 11 in</span>
            </div>

            <div className="vz-preview-canvas">
              <div className="vz-preview-paper">
                <LayoutTemplate size={48} />

                <h2>Your sales sheet starts here.</h2>

                <p>
                  Template selection and product
                  configuration will be available
                  in the next release.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PortalLayout>
  )
}

export default SalesStudio