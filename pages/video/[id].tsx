import {GetServerSideProps} from 'next'
import YouTube, { Options } from 'react-youtube';
import axios from 'axios'
import Layout from 'components/Layout'
import Section from 'components/Section'
import { server } from 'config'
import { Artwork } from 'interfaces'
import styles from 'styles/detail.scss'
import 'styles/global.scss'

type Props = {
  data: Artwork
}

const ArtworkPage = ({ data }: Props) => {
  const opts: Options = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
  <Layout>
    <Section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div className={styles.container}>
        <div>
          <h1>{data.title}</h1>
          <span>{data.type}</span>

          <p>{data.artist} 제작</p>
          <p>{data.description}</p>
        </div>
        <div>
          <YouTube videoId={data.videoId} opts={opts} />
        </div>
      </div>
    </Section>
  </Layout>
)}

export default ArtworkPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {id} = ctx.query;
  const res = await axios.get(`${server}/api/portfolio/${id}`)

  return { props: {
    data: res.data
  }}
}