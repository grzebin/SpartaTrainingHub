
import { Link } from 'react-router-dom'
import PortalLayout from './PortalLayout'

type PlaceholderPageProps = {
  title: string
  portal: 'spartan' | 'captain'
}

function PlaceholderPage({ title, portal }: PlaceholderPageProps) {
  return (
    <PortalLayout portal={portal}>
      <h1>{title}</h1>

      <p>This SPARTA section is under development.</p>

      <p>
        Grow People. Protect the Standard. Expand the Territory.
      </p>

      <Link to={`/${portal}`}>
        Return to {portal === 'spartan' ? 'Spartan' : 'Captain'} Dashboard
      </Link>
    </PortalLayout>
  )
}

export default PlaceholderPage
