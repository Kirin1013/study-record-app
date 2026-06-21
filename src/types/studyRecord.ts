export type StudyRecord = {
  id: string
  date: string
  category: string
  title: string
  hours: number
  memo?: string
  createdAt: string
}

export const STUDY_CATEGORIES = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TypeScript',
  'その他',
] as const

export type StudyCategory = (typeof STUDY_CATEGORIES)[number]

export type StudyFormData = {
  date: string
  category: StudyCategory
  title: string
  hours: string
  memo: string
}
