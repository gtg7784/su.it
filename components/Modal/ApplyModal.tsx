import React from 'react';
import styles from 'styles/modal/applymodal.scss';
import ApplyCard from 'components/Card/ApplyCard'
import { Member } from 'interfaces'

type Props = {
  openModal : boolean
  closeModal : Function
  portfolio : Member[]
}

const ApplyModal = ({ portfolio, openModal, closeModal }:Props) => {

    return (
    openModal ? 
   	    <div className={styles.overlay}>
            <div className={styles.Modal}>
                <a onClick={() => closeModal()}>
                    <img src="/static/close.svg" alt=""/>
                </a>
                <div>
                    {portfolio.map((item, index) => <ApplyCard {...item} key={index}/>)}
                </div>
            </div>
        </div>
    :
    null
  )
}
export default ApplyModal;