import styles from './Layout.module.css'
import logo from './../../assets/images/ts_logo--light.png'
import { PropsWithChildren } from 'react'

export interface LayoutProps extends PropsWithChildren{
  title: string
}

export default function Layout({ title, children }: LayoutProps): JSX.Element {
  return (
    <div>
      {children}
    </div>
    )
}
