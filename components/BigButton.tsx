import React from 'react';
import styles from 'styles/BigButton.scss';

type Props = {
}

const BigButton = ({ }: Props) => (
  <button type="button" className={styles.bigbutton}>지원하기</button>
)

export default BigButton