import React from 'react'
import styles from 'styles/SlideShow.scss'

const SlideShow = () =>{
  return(
    <div className={styles.slidewrapper}>
      <div className={styles.navbtn}>
        <img src="/static/leftArrow.svg" alt=""/>
      </div>

      <div className={styles.qnabox}>
        <div>
          <span>Q</span>
          <p>질문.</p>
        </div>
        <div>
          <span>A.</span>
          <p>응답.</p>
        </div>
      </div>

      <div className={styles.navbtn}>
        <img src="/static/rightArrow.svg" alt=""/>
      </div>
    </div>
  )
}

export default SlideShow;
