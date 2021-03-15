import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import 'styles/global.scss'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'su.it' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=1920" />
    </Head>
    <Header/>
    {children}
    <Footer/>
  </div>
)

export default Layout
