import React, { useEffect,useRef,useState } from 'react'
import axios from 'axios'
import Layout from 'components/Layout'
import Section from 'components/Section'
import Card from 'components/Card'
import BigButton from 'components/BigButton'
import Slider from 'components/Slider'
import styles from 'styles/index.scss'
import { Artwork, QnaType } from 'interfaces'
import { server } from 'config';

type Props = {
  portfolio: Artwork[]
  qna: QnaType[]
}

const IndexPage = ({ portfolio, qna }: Props) => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let intervalRef = useRef();

  const startTimer = () => {
      const countdownDate = new Date('April 30, 2021 00:00:00').getTime();

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        

        if (distance < 0) {
          clearInterval(interval.current);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);
      intervalRef.current = interval;
  };

  useEffect(()=> {
      startTimer();
      return () => {
        clearInterval(intervalRef.current);
      };
  });
  
  return (
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
        <h2>Apply</h2>
        <div className={styles.timerwrapper}>
          <div>
            <div>
              <h3>{timerDays}</h3>
              <span>Day</span>
            </div>
            <div className={styles.divider}/>
            <div>
              <h3>{timerHours}</h3>
              <span>Hour</span>
            </div>
            <div className={styles.divider}/>
            <div>
              <h3>{timerMinutes}</h3>
              <span>Min</span>
            </div>
            <div className={styles.divider}/>
            <div>
              <h3>{timerSeconds}</h3>
              <span>Sec</span>
            </div>
          </div>
          <BigButton text="지원하기" />
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
        <Slider data={qna}/>
        <BigButton text="질문하기" />
      </div>
    </Section>
  </Layout>
)}

export default IndexPage;

export async function getServerSideProps() {
  const portfolio = await axios.get(`${server}/api/portfolio`)
  const qna = await axios.get(`${server}/api/qna`)

  return { props: {
    portfolio: portfolio.data,
    qna: qna.data
  }}
}
