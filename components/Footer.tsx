import React from 'react'
import Link from 'next/link'
import styles from 'styles/footer.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      {/* ---------- 로고 ---------- */}
      <div>
        <img src="/static/logo-sunrin.svg" alt=""/>
        <div>
          <Link href="https://sunrint.hs.kr">
            <a>
              <img src="/static/sunrin.svg" alt=""/>
            </a>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100054473020768">
            <a>
              <img src="/static/facebook.svg" alt=""/>
            </a>
          </Link>
        </div>
      </div>

      {/* ---------- 저작권 ---------- */}
      <div>
        <p>
          Copyright 2021 선린인터넷고등학교 IT경영과<br/>
          all rights reserved.
        </p>
      </div>
      
      {/* ---------- 정보 ---------- */}
      <div>
        <div className={styles.wrapper}>
          <div className={styles.items}>
            <span>Address.</span>
            <p>서울특별시 용산구 원효로97길 33-4, 선린인터넷고등학교</p>
          </div>
          <div className={styles.items}>
            <span>Tel.</span>
            <p>02-713-6211</p>
          </div>
          <div className={styles.items}>
            <span>Fax.</span>
            <p>02-704-0960</p>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.items}>
            <span>Designed by </span>
            <p>Jimin Hong</p>
          </div>
          <div className={styles.items}>
            <span>Developed by </span>
            <p>
              Taegun Go<br/>
              Seunghyuk Oh 
            </p>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.items}>
            <span>시연회 제작 도움</span>
          </div>
          <div className={styles.items}>
            <p>
              BFD<br/>
              ERP<br/>
              FRS<br/>
              HMH<br/>
              KIWKINOMICS<br/>
              TAXI<br/>
            </p>
          </div>
          <div className={styles.items}>
            <p>
              Sunbin Song<br/>
              Minsun Kim<br/>
              Hyunjoon Choi<br/>
              Woosung Yoon<br/>
              Sanha Moon<br/>
              Seojin Lee<br/>
            </p>
          </div>
        </div>

      </div>
      
    </div>
  </footer>
)

export default Footer


{/* <div>
      <img src="/static/logo-sunrin.svg" alt=""/>
      <div>
      <Link href="https://sunrint.hs.kr">
        <a>
          <img src="/static/sunrin.svg" alt=""/>
        </a>
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=100054473020768">
        <a>
          <img src="/static/facebook.svg" alt=""/>
        </a>
      </Link>
      </div>
    </div>
    <div>
        <p>
          Copyright 2021 선린인터넷고등학교 IT경영과<br/>
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
    </div> */}