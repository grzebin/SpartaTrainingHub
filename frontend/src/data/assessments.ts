
export type AssessmentQuestion = {
  id: string
  question: string
  options: string[]
  correctAnswerIndex: number
}

export type ModuleAssessment = {
  moduleId: string
  passingScore: number
  questions: AssessmentQuestion[]
}

export const assessments: ModuleAssessment[] = [
  {
    moduleId: 'core-product-knowledge',
    passingScore: 90,
    questions: [
      {
        id: 'core-q1',
        question: 'How much MIT is in one Energy & Focus bottle?',
        options: ['20 mg', '40 mg', '60 mg', '80 mg'],
        correctAnswerIndex: 1,
      },
      {
        id: 'core-q2',
        question: 'How much MIT is in one Strong bottle?',
        options: ['40 mg', '60 mg', '80 mg', '100 mg'],
        correctAnswerIndex: 2,
      },
      {
        id: 'core-q3',
        question: 'Which core product contains both MIT and kava?',
        options: [
          'Energy & Focus',
          'Strong',
          'Stress Relief',
          'All three products',
        ],
        correctAnswerIndex: 2,
      },
      {
        id: 'core-q4',
        question: 'How many bottles are in a standard core display?',
        options: ['6', '10', '12', '24'],
        correctAnswerIndex: 2,
      },
      {
        id: 'core-q5',
        question: 'What is the standard retailer cost for a Strong display?',
        options: ['$24', '$30', '$48', '$60'],
        correctAnswerIndex: 2,
      },
      {
        id: 'core-q6',
        question: 'What is the suggested retail price for Energy & Focus?',
        options: ['$3.99', '$4.99', '$5.99', '$7.99'],
        correctAnswerIndex: 1,
      },
      {
        id: 'core-q7',
        question: 'How much kava is listed in Stress Relief?',
        options: ['120 mg', '260 mg', '400 mg', '520 mg'],
        correctAnswerIndex: 3,
      },
      {
        id: 'core-q8',
        question: 'Which core product contains 80 mg MIT per bottle?',
        options: [
          'Stress Relief',
          'Energy & Focus',
          'Strong',
          'All three products',
        ],
        correctAnswerIndex: 2,
      },
      {
        id: 'core-q9',
        question: 'What is the standard retailer cost for Energy & Focus?',
        options: ['$15', '$24', '$30', '$48'],
        correctAnswerIndex: 2,
      },
      {
        id: 'core-q10',
        question: 'What is the suggested retail price for Strong?',
        options: ['$4.99', '$5.99', '$6.99', '$7.99'],
        correctAnswerIndex: 3,
      },
    ],
  },
]
