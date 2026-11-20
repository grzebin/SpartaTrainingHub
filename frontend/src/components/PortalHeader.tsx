
import { Link } from 'react-router-dom'
import { CircleUserRound } from 'lucide-react'

type PortalHeaderProps = {
  portalName: string
}

function PortalHeader({ portalName }: PortalHeaderProps) {
  return (
    <header className="portal-header">
      <Link to="/" className="portal-brand" aria-label="SPARTA home">
        <span className="portal-brand-name">
          SPARTA<span className="portal-brand-dot">.</span>
        </span>
        <span className="portal-brand-subtitle">BY VIVAZEN</span>
      </Link>

      <div className="portal-header-right">
        <span className="portal-header-label">{portalName}</span>

        <div className="portal-profile" aria-label="Profile preview">
          <CircleUserRound size={24} aria-hidden="true" />
        </div>
      </div>
    </header>
  )
}

export default PortalHeader
