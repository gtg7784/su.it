import React from 'react';
import styles from 'styles/FixedButton.scss';

type Props = {
  openModal :Function
}

const fixedButton = ({ openModal }: Props) => (
  <button className={styles.fixedbutton} onClick={() => openModal()}>지원하기</button>
)

export default fixedButton