
import { NavLink } from 'react-router-dom'
import {
  House,
  BookOpen,
  GraduationCap,
  BriefcaseBusiness,
  Users,
  ChartNoAxesCombined,
  ClipboardList,
  FolderOpen,
} from 'lucide-react'

type PortalNavigationProps = {
  portal: 'spartan' | 'captain'
}

function PortalNavigation({ portal }: PortalNavigationProps) {
  const spartanLinks = [
    { label: 'Welcome to SPARTA', path: '/spartan', icon: House },
    { label: 'The Hub', path: '/spartan/hub', icon: BookOpen },
    { label: 'Training Grounds', path: '/spartan/training', icon: GraduationCap },
    { label: 'Spartan Tool Kit', path: '/spartan/toolkit', icon: BriefcaseBusiness },
  ]

  const captainLinks = [
    { label: 'Captain Dashboard', path: '/captain', icon: House },
    { label: 'Training Management', path: '/captain/training', icon: GraduationCap },
    { label: 'Spartan Performance', path: '/captain/spartans', icon: Users },
    { label: 'Market Performance', path: '/captain/markets', icon: ChartNoAxesCombined },
    { label: 'Requests & Forms', path: '/captain/requests', icon: ClipboardList },
    { label: 'Leadership Resources', path: '/captain/resources', icon: FolderOpen },
  ]

  const links = portal === 'spartan' ? spartanLinks : captainLinks

  return (
    <nav aria-label={`${portal} navigation`}>
      <ul>
        {links.map((link) => {
          const Icon = link.icon

          return (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === `/${portal}`}
              >
                <Icon size={19} aria-hidden="true" />
                <span>{link.label}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default PortalNavigation
