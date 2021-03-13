import React, { useEffect,useRef,useState } from 'react'
import axios from 'axios'
import Layout from 'components/Layout'
import Section from 'components/Section'
import Card from 'components/Card'
import styles from 'styles/index.scss'
import { Artwork, Award, User } from 'interfaces'
import { server } from 'config';
import BigButton from 'components/BigButton'

type Props = {
  secondMember: User[]
  thirdMember: User[]
  firstAward: Award[]
  secondAward: Award[]
  portfolio: Artwork[]
}

const IndexPage = ({ portfolio }: Props) => (

  <Layout>
    {/* ---------- banner ---------- */}
    <Section id="main" style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'black'}}>
      <div className={styles.home}>
        <div className={styles.text}>
          <h1 style={{color: '#fff'}}>
            나에게 딱 맞는 동아리
            <div/>
          </h1>
          <p>
            선린인터넷고등학교 IT경영과 동아리 신청 사이트 'SU-IT' 입니다.<br/>
            신입생 여러분들은  많은 동아리 중에서 본인에게 맞는 동아리를<br/>
            잘 선택하여 즐거운 학교생활을 할 수 있길 응원합니다.
          </p>
        </div>
        <div className={styles.deco}>
          <div className={styles.stroke}/>
          <div className={styles.fill}/>
        </div>
      </div>
    </Section>
    <div className={styles.downarrow}>
      <img src="static/downArrow.svg" alt=""/>
    </div>
    {/* ---------- Introduce ---------- */}
    <Section id="intro">
      <div className={styles.member}>
        <h2>
          Introduce
          <div/>
        </h2>
        <div className={styles.grid}>
          {portfolio.map((item, index) => <Card {...item} index={index} key={index}/>)}
        </div>
      </div>
    </Section>
    {/* ---------- Apply ---------- */}
    <Section id="apply" style={{ display: 'flex', flexDirection: 'row'}}>
      <div className={styles.apply}>
        <h2>
          Apply
          <div/>
        </h2>
        <div className={styles.timerwrapper}>
          <BigButton/>
        </div>
      </div>
    </Section>
    {/* ---------- Q&A ---------- */}
    <Section id="Q&A">
      <div className={styles.qna}>
        <h2>
          Q&A
          <div/>
        </h2>
      </div>
    </Section>
  </Layout>
)

export default IndexPage;

export async function getServerSideProps() {
  const secondMember = await axios.get(`${server}/api/member/2`)
  const thirdMember = await axios.get(`${server}/api/member/3`)
  const firstAward = await axios.get(`${server}/api/award/2019`)
  const secondAward = await axios.get(`${server}/api/award/2020`)
  const portfolio = await axios.get(`${server}/api/portfolio`)

  return { props: {
    secondMember: secondMember.data,
    thirdMember: thirdMember.data,
    firstAward: firstAward.data,
    secondAward: secondAward.data,
    portfolio: portfolio.data
  }}
}
