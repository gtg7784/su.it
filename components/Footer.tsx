import React from 'react'
import Link from 'next/link'
import styles from 'styles/footer.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <img src="/static/logo-vfriends-white.svg" alt=""/>
      <div>
        <p>
          Copyright 2021 V.friends<br/>
          all rights reserved.
        </p>
        <p>
          서울특별시 용산구 원효로97길 33-4<br/>
          선린인터넷고등학교
        </p>
        <p>
          디자인  |  김고은<br/>
          개발  |  고태건
        </p>
      </div>
    </div>
    <div>
      <Link href="https://sunrint.hs.kr">
        <div>
          <img src="/static/sunrin.svg" alt=""/>
        </div>
      </Link>
      <Link href="https://youtube.com/channel/UCCWE7p-Cz3eP_Qws7zFoG8w">
        <div>
          <img src="/static/youtube.svg" alt=""/>
        </div>
      </Link>
      <Link href="https://facebook.com/with.v.friends/">
        <div>
          <img src="/static/facebook.svg" alt=""/>
        </div>
      </Link>
    </div>
  </footer>
)

export default Footer
