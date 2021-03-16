import React from 'react';
import styles from 'styles/BigButton.scss';

type Props = {
  text: string
}

const BigButton = ({ text }: Props) => (
  <button className={styles.bigbutton}>{text}</button>
)

export default BigButton