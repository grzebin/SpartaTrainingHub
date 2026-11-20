
import { Link } from 'react-router-dom'
import {
  DollarSign,
  MapPin,
  ShoppingCart,
  ChartNoAxesColumn,
} from 'lucide-react'

import DashboardCard from './DashboardCard'

function MarketSnapshot() {
  return (
    <section className="dashboard-section market-snapshot">
      <div className="dashboard-section-heading">
        <div>
          <h2>Market Performance</h2>
          <p>Weekly field execution and sales activity.</p>
        </div>

        <Link to="/captain/markets">View Market Details</Link>
      </div>

      <div className="dashboard-card-grid">
        <DashboardCard
          title="Weekly Sales"
          value="$24,850"
          description="Net sales this week"
          icon={<DollarSign size={20} />}
        />

        <DashboardCard
          title="Unique Visits"
          value={487}
          description="Distinct store visits this week"
          icon={<MapPin size={20} />}
        />

        <DashboardCard
          title="Unique Orders"
          value={62}
          description="Distinct orders this week"
          icon={<ShoppingCart size={20} />}
        />

        <DashboardCard
          title="Average Order Value"
          value="$401"
          description="Net sales divided by unique orders"
          icon={<ChartNoAxesColumn size={20} />}
        />
      </div>

      <p className="dashboard-demo-note">
        Demonstration data — live market reporting will be connected later.
      </p>
    </section>
  )
}

export default MarketSnapshot
