import React from 'react';
import styles from 'styles/BigButton.scss';

type Props = {
  text: string
  openModal :Function
}

const BigButton = ({ text,openModal }: Props) => (
  <button onClick={() => openModal()} type="button" className={styles.bigbutton}>{text}</button>
)

export default BigButton