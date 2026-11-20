
import type { ReactNode } from 'react'
import PortalHeader from './PortalHeader'
import PortalNavigation from './PortalNavigation'
import MobileNavigation from './MobileNavigation'

type PortalLayoutProps = {
  portal: 'spartan' | 'captain'
  children: ReactNode
}

function PortalLayout({ portal, children }: PortalLayoutProps) {
  const portalName =
    portal === 'spartan'
      ? 'Spartan Portal'
      : 'Captain / Sales Leadership Portal'

  return (
    <div className="portal-layout">
      <PortalHeader portalName={portalName} />

      <div className="portal-layout-body">
        <aside className="portal-sidebar">
          <PortalNavigation portal={portal} />
        </aside>

        <main className="portal-content">
          {children}
        </main>
      </div>

      <MobileNavigation portal={portal} />
    </div>
  )
}

export default PortalLayout
