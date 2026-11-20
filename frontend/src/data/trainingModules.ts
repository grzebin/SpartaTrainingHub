
export type TrainingModule = {
  id: string
  title: string
  category: string
  description: string
  estimatedMinutes: number
  status: 'Completed' | 'In Progress' | 'Not Started'
}

export const trainingModules: TrainingModule[] = [
  {
    id: 'core-product-knowledge',
    title: 'Core Product Knowledge',
    category: 'Product Knowledge',
    description: 'Energy & Focus, Strong, and Stress Relief.',
    estimatedMinutes: 10,
    status: 'Completed',
  },
  {
    id: 'ultimate-product-knowledge',
    title: 'Ultimate Product Knowledge',
    category: 'Product Knowledge',
    description: 'Ultimate Red, Gold, and Diamond.',
    estimatedMinutes: 8,
    status: 'Not Started',
  },
  {
    id: 'product-quality-standards',
    title: 'Product Quality & Standards',
    category: 'Product Knowledge',
    description: 'Product quality, testing, and responsible positioning.',
    estimatedMinutes: 7,
    status: 'Not Started',
  },

  {
    id: 'spartan-sales-process',
    title: 'The SPARTAN Sales Process',
    category: 'Sales Execution',
    description: 'Learn the seven stages of the SPARTAN selling framework.',
    estimatedMinutes: 12,
    status: 'In Progress',
  },
  {
    id: 'objection-handling',
    title: 'Handling Retailer Objections',
    category: 'Sales Execution',
    description: 'Respond confidently to common retailer concerns.',
    estimatedMinutes: 8,
    status: 'Not Started',
  },
  {
    id: 'manifest-fundamentals',
    title: 'Manifest App Fundamentals',
    category: 'Systems & Tools',
    description: 'Navigate Manifest and complete essential field activities.',
    estimatedMinutes: 10,
    status: 'Not Started',
  },
  {
    id: 'shopify-pos-fallback',
    title: 'Shopify POS Fallback',
    category: 'Systems & Tools',
    description: 'Process orders using Shopify POS when Manifest is unavailable.',
    estimatedMinutes: 8,
    status: 'Not Started',
  },
  {
    id: 'daily-field-rhythm',
    title: 'Daily Field Rhythm',
    category: 'Field Operations',
    description: 'Plan and execute a productive day in the territory.',
    estimatedMinutes: 7,
    status: 'Not Started',
  },
  {
    id: 'territory-management',
    title: 'Territory Management',
    category: 'Field Operations',
    description: 'Maintain account coverage and organize field visits.',
    estimatedMinutes: 9,
    status: 'Not Started',
  },
  {
    id: 'retailer-discovery',
    title: 'Retailer Discovery',
    category: 'Retailer Relationships',
    description: 'Understand retailer needs before positioning products.',
    estimatedMinutes: 7,
    status: 'Not Started',
  },
  {
    id: 'reorder-conversations',
    title: 'Reorder Conversations',
    category: 'Retailer Relationships',
    description: 'Evaluate sell-through and earn recurring orders.',
    estimatedMinutes: 8,
    status: 'Not Started',
  },
  {
    id: 'spartan-kpis',
    title: 'Understanding Spartan KPIs',
    category: 'Performance & Growth',
    description: 'Understand the activity and production metrics that matter.',
    estimatedMinutes: 8,
    status: 'Not Started',
  },
  {
    id: 'coaching-development',
    title: 'Coaching & Development',
    category: 'Performance & Growth',
    description: 'Apply feedback and create a personal improvement plan.',
    estimatedMinutes: 7,
    status: 'Not Started',
  },
  {
    id: 'product-compliance',
    title: 'Product Compliance',
    category: 'Compliance & Standards',
    description: 'Understand responsible product positioning and compliance requirements.',
    estimatedMinutes: 10,
    status: 'Not Started',
  },
  {
    id: 'field-conduct',
    title: 'Professional Field Conduct',
    category: 'Compliance & Standards',
    description: 'Follow SPARTA standards for retailer interactions and field activity.',
    estimatedMinutes: 8,
    status: 'Not Started',
  },

]
