import React from 'react'
import styles from 'styles/label.scss'

type Props = {
  text: string
}

const Label = ({ text }: Props) => (
  <span className={styles.label}>{text}</span>
)

export default Label