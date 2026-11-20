
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <main>
      <h1>SPARTA</h1>

      <p>
        Grow People. Protect the Standard. Expand the Territory.
      </p>

      <h2>Select Your Portal</h2>

      <nav>
        <p>
          <Link to="/spartan">Spartan Portal</Link>
        </p>

        <p>
          <Link to="/captain">
            Captain / Sales Leadership Portal
          </Link>
        </p>
      </nav>
    </main>
  )
}

export default LandingPage
