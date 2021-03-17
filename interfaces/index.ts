export type User = {
  name: string
  role?: string
  description: string
}

export type Award = {
  title: string
  name: string
}

export type Member = {
  title: string
  color: string
  description: string
  specialty: boolean
  index?: number
  formsite: string
  introduce: Array<string>
  activity: Array<string>
  rep: object
  awards:boolean
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
