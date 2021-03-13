import React from 'react'
import Link from 'next/link'
import styles from 'styles/header.scss'

const Header = () => (
  <header className={styles.header}>
    <Link href="/#main">
      <a>
        <img src="/static/logo-suit.svg" alt=""/>
      </a>
    </Link>
    <ul>
      <li>
        <Link href="/#intro">Introduce</Link>
      </li>
      <li>
        <Link href="/#apply">Apply</Link>
      </li>
      <li>
        <Link href="/#Q&A">Q&A</Link>
      </li>
      <li>
        <Link href="/">Login</Link>
      </li>
    </ul>
  </header>
)

export default Header;
