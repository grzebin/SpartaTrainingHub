
export type LessonSection = {
  id: string
  title: string
  description: string
  content: string[]
}

export type ModuleContent = {
  moduleId: string
  introduction: string
  sections: LessonSection[]
}

export const lessonContent: ModuleContent[] = [
  {
    moduleId: 'core-product-knowledge',
    introduction:
      'Learn the specifications and retailer positioning of the three core VIVAZEN products.',
    sections: [
      {
        id: 'energy-focus',
        title: 'Energy & Focus',
        description: 'Core product overview and positioning.',
       
content: [
  'Understand where Energy & Focus fits within the VIVAZEN core product portfolio.',
  'Identify retailers and customers who may be interested in the Energy & Focus product positioning.',
  'Learn to introduce Energy & Focus using approved product messaging.',
  'Explain the product specifications and standard pricing using the reference card below.',
],

      },
      {
        id: 'strong',
        title: 'Strong',
        description: 'Core product overview and positioning.',
        
content: [
  'Understand where Strong fits within the VIVAZEN core product portfolio.',
  'Recognize how Strong differs from Energy & Focus in MIT content and product positioning.',
  'Identify appropriate opportunities to introduce Strong to retailers using approved product messaging.',
  'Explain the product specifications and standard pricing using the reference card below.',
],

      },
      {
        id: 'stress-relief',
        title: 'Stress Relief',
        description: 'Core product overview and positioning.',
        
content: [
  'Understand where Stress Relief fits within the VIVAZEN core product portfolio.',
  'Recognize that Stress Relief combines MIT and kava, and identify how its formulation differs from the other core products.',
  'Learn to introduce Stress Relief using approved product messaging without making medical or treatment claims.',
  'Explain the product specifications and standard pricing using the reference card below.',
],

      },
    ],
  },
]
