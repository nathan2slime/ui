import { ReactNode } from 'react'

export type AppChildren<T = object> = T & {
  children: ReactNode
}
