import {QnaType} from 'interfaces';
import styles from 'styles/slide.scss';

type Props = {
  data: QnaType
}

const Slide = ({ data }: Props) => {
  return (
    <div className={styles.slide}>
      Q. {data.q} <br/>
      A. {data.a}      
    </div>
  );
}

export default Slide;