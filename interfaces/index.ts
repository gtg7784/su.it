export type User = {
  name: string
  role?: string
  description: string
}

export type Award = {
  title: string
  name: string
}

export type Artwork = {
  title: string
  type: string
  description: string
  specialty?: string
  // image?: number[]
  index?: number
}

export interface AwardData {
  [keys: number]: Award[];
}

export interface UserData {
  [keys: number]: User[];
}

export type QnaType = {
  q: string
  a: string
}
