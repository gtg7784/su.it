import React, {CSSProperties, ReactNode} from 'react';
import styles from 'styles/section.scss';

type Props = {
  children: ReactNode,
  style?: CSSProperties
  id?: string
}

const Section = ({ children, style, id }: Props) => (
  <section className={styles.section} style={style} id={id}>
        {children}
  </section>
)

export default Section