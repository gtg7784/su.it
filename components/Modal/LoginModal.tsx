import React from 'react';
import styles from 'styles/modal/loginmodal.scss';

type Props = {
  openModal : boolean
  closeModal : Function
}

const Modal = ({openModal, closeModal}:Props) => {

    return (
    openModal ? 
   	    <div className={styles.overlay}>
            <div className={styles.Modal}>
                <a onClick={() => closeModal()}>
                    <img src="/static/close.svg" alt=""/>
                </a>
                <img src="/static/logo-suit.svg" alt=""/>
                <form action="#" method="POST">
                    <input type="text" name="id" placeholder="ID" required/>
                    <input type="password" name="password" placeholder="PW" required/>
                    <input type="submit" form="loginForm" value="LOGIN" className={styles.button} onClick={() => closeModal()}/>
                </form>
            </div>
        </div>
    :
    null
  )
}
export default Modal;