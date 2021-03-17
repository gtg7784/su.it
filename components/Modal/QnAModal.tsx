import React from 'react';
import { Member } from 'interfaces'
import styles from 'styles/modal/qnamodal.scss';

type Props = {
  openModal : boolean
  closeModal : Function
  portfolio: Member[]
}

const Modal = ({openModal, closeModal, portfolio }:Props) => {

    return (
    openModal ? 
   	    <div className={styles.overlay}>
            <div className={styles.Modal}>
                <a onClick={() => closeModal()}>
                    <img src="/static/close.svg" alt=""/>
                </a>
                <div>
                <span>질문</span>
                    <form action="#" method="POST">
                        <input type="email" name="Email" placeholder="E-mail" required/>
                        <select>
                            <option value="학교 질문">학교 질문</option>
                            {portfolio.map((item, index) => <option value={item.title} key={index}>{item.title}</option>)}
                        </select>
                        <textarea name="comment" placeholder="내용을 입력하시오."></textarea>
                        <input type="submit" form="loginForm" value="LOGIN" className={styles.button} onClick={() => closeModal()}/>
                    </form>
                </div>
            </div>
        </div>
    :
    null
  )
}
export default Modal;
