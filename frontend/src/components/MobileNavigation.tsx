
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  House,
  BookOpen,
  GraduationCap,
  BriefcaseBusiness,
  Users,
  ChartNoAxesCombined,
  ClipboardList,
  FolderOpen,
  Menu,
  X,
} from 'lucide-react'

type MobileNavigationProps = {
  portal: 'spartan' | 'captain'
}

function MobileNavigation({ portal }: MobileNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const spartanLinks = [
    { label: 'Home', path: '/spartan', icon: House },
    { label: 'The Hub', path: '/spartan/hub', icon: BookOpen },
    { label: 'Training', path: '/spartan/training', icon: GraduationCap },
    { label: 'Tool Kit', path: '/spartan/toolkit', icon: BriefcaseBusiness },
  ]

  const captainLinks = [
    { label: 'Home', path: '/captain', icon: House },
    { label: 'Training', path: '/captain/training', icon: GraduationCap },
    { label: 'Spartans', path: '/captain/spartans', icon: Users },
    { label: 'Markets', path: '/captain/markets', icon: ChartNoAxesCombined },
    { label: 'Requests', path: '/captain/requests', icon: ClipboardList },
    { label: 'Resources', path: '/captain/resources', icon: FolderOpen },
  ]

  const links = portal === 'spartan' ? spartanLinks : captainLinks
  const primaryLinks = links.slice(0, 3)
  const additionalLinks = links.slice(3)

  const moreActive = additionalLinks.some(
    (link) =>
      location.pathname === link.path ||
      location.pathname.startsWith(`${link.path}/`)
  )

  return (
    <div className="mobile-navigation">
      {menuOpen && (
        <nav
          id="mobile-more-navigation"
          className="mobile-more-menu"
          aria-label="Additional navigation"
        >
          {additionalLinks.map((link) => {
            const Icon = link.icon

            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
              >
                <Icon size={19} aria-hidden="true" />
                <span>{link.label}</span>
              </NavLink>
            )
          })}
        </nav>
      )}

      <nav className="mobile-bottom-bar" aria-label="Mobile navigation">
        {primaryLinks.map((link) => {
          const Icon = link.icon

          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === `/${portal}`}
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={21} aria-hidden="true" />
              <span>{link.label}</span>
            </NavLink>
          )
        })}

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-more-navigation"
          aria-label={menuOpen ? 'Close additional navigation' : 'Open additional navigation'}
          className={moreActive ? 'more-active' : ''}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={21} aria-hidden="true" />
          ) : (
            <Menu size={21} aria-hidden="true" />
          )}
          <span>More</span>
        </button>
      </nav>
    </div>
  )
}

export default MobileNavigation
