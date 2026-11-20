
import type { ReactNode } from 'react'

type DashboardCardProps = {
  title: string
  value: string | number
  description?: string
  icon?: ReactNode
}

function DashboardCard({
  title,
  value,
  description,
  icon,
}: DashboardCardProps) {
  return (
    <section className="dashboard-card">
      <div className="dashboard-card-header">
        <span className="dashboard-card-title">{title}</span>
        {icon && <span className="dashboard-card-icon">{icon}</span>}
      </div>

      <div className="dashboard-card-value">{value}</div>

      {description && (
        <p className="dashboard-card-description">{description}</p>
      )}
    </section>
  )
}

export default DashboardCard
