import {GetServerSideProps} from 'next'
import Link from 'next/link'
import axios from 'axios'
import Layout from 'components/Layout'
import Section from 'components/Section'
import { server } from 'config'
import { Member } from 'interfaces'
import styles from 'styles/detail.scss'
import 'styles/global.scss'

type Props = {
  data: Member[]
}

const IndividualPage = ({ data }: Props) => {

  return (
    <Layout>
      <Section>
        <div className={styles.home}>
          <div>
            <Link href="/#main">
            <a>
              <img src="/static/goToBackArrow.svg" alt=""/>
            </a>
          </Link>
            <img src={`/logo/${data.title}.png`} alt=""/>
          </div>
          <div>
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.intro}>
          <h2>
            Introduce
            <div style={{backgroundColor:`${data.color}`}}/>
          </h2>
          <img src={`/logo/${data.title}.png`} alt=""/>
          <p>{data.introduce.map((contents) => <>{contents}<br/></>)}</p>
        </div>
      </Section>

      <Section>
        <div className={styles.active}>
          <h2>
            Activity
            <div style={{backgroundColor:`${data.color}`}}/>
          </h2>
          <p>{data.activity.map((contents) => <>{contents}<br/></>)}</p>
        </div>
      </Section>
      
      {data.awards ?
        <Section>
          <div className={styles.awards} style={{backgroundColor:`${data.color}`}}>
            <h2>
              Awards
              <div style={{backgroundColor:'#fff'}}/>
            </h2>
          </div>
        </Section>
      :null}

      <Section style={{minHeight:'700px',paddingBottom:'200px'}}>
        <div className={styles.info}>
          <div className={styles.left}>
            <div>
            <img src="/static/talk.svg" alt=""/>
              <div>
                <span>Help</span>
                <p>
                  부장 {data.rep.Director.name} : {data.rep.Director.call}<br/>
                  쀼장 {data.rep.viceDirector.name} : {data.rep.viceDirector.call}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.bar}/>
          <div className={styles.right}>
            <div>
              <img src="/static/pencil.svg" alt=""/>
              <div>
                <span>Apply</span>
                <p>
                  지원폼은 ‘신중’하고<br/>
                  ‘성의’있게 작성해주시기 바랍니다.
                </p>
                <Link href={data.formsite}>
                  <a target="_blank">
                    지원하기
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default IndividualPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {id} = ctx.query;
  const res = await axios.get(`${server}/api/portfolio/${id}`)

  return { props: {
    data: res.data
  }}
}
