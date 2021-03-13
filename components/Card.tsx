import Link from 'next/link'
import Image from 'next/image'
import { Artwork } from 'interfaces'
import { getHref } from 'utils/portfolio';
import styles from 'styles/card.scss'

const Portfolio = ({title, specialty, description, index}: Artwork) => (
  <Link href={getHref(title,index as Number)}>
    <div className={styles.portfolio}>
      <Image width={100} height={100} src={`/thumbnail/${title}.png`} alt=""/>
      <h3>{title}</h3>
      <span>{description}</span>
      {/* {specialty ? <span>({specialty})</span> : } */}
      <span>({specialty})</span>
    </div>
  </Link>
)

export default Portfolio
