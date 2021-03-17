import Link from 'next/link'
import Image from 'next/image'
import { Member } from 'interfaces'
import { getHref } from 'utils/portfolio';
import styles from 'styles/card.scss'

const Portfolio = ({title, specialty, description, index}: Member) => (
  <Link href={getHref(title,index as Number)}>
    <div className={styles.card}>
      <Image width={100} height={100} src={`/logo/${title}.png`} alt=""/>
      <h3>{title}</h3>
      <span>{description}</span>
      {specialty ? <span>(전문)</span> : null}
    </div>
  </Link>
)

export default Portfolio
