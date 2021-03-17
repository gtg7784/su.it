import React, { ReactNode,useState } from 'react'
import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import LoginModal from 'components/Modal/LoginModal'
import 'styles/global.scss'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'su.it' }: Props) => {
  const [CreateModal, setCreateModal] = useState(false);
  const openModal = () => {setCreateModal(true)};
  const closeModal = () => {setCreateModal(false)};
  return (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=1920" />
    </Head>
    <Header openModal={openModal}/>
    <LoginModal openModal={CreateModal} closeModal={closeModal}/>
    {children}
    <Footer/>
  </div>
  )
}

export default Layout
