import React, { useEffect,useRef,useState } from 'react'
import styles from 'styles/Timer.scss'

type Props = {
  date : string
}

const Timer = ({ date }: Props) => {
    const [timerDays, setTimerDays] = useState<string>('00');
    const [timerHours, setTimerHours] = useState<string>('00');
    const [timerMinutes, setTimerMinutes] = useState<string>('00');
    const [timerSeconds, setTimerSeconds] = useState<string>('00');

    let intervalRef = useRef();

    const startTimer = () => {
        const countdownDate = new Date(date).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            

            if (distance < 0) {
                //stop our timer
                clearInterval(interval.current);
            } else {
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
        intervalRef.current = interval;
    };

    function LeadingZero(num: number) {
        return num < 10 ? "0" + num : num;
    };

    //componentDidMount
    useEffect(()=> {
        startTimer();
        return () => {
            clearInterval(intervalRef.current);
        };
    });

    return (
        <div className={styles.timerwrapper}>
            <div className={styles.group}>
                <span className={styles.number}>{LeadingZero(timerDays)}</span>
                <span className={styles.text}>DAY</span>
            </div>

            <div className={styles.bar}/>

            <div className={styles.group}>
                <span className={styles.number}>{LeadingZero(timerHours)}</span>
                <span className={styles.text}>HOUR</span>
            </div>

            <div className={styles.bar}/>

            <div className={styles.group}>
                <span className={styles.number}>{LeadingZero(timerMinutes)}</span>
                <span className={styles.text}>MIN</span>
            </div>

            <div className={styles.bar}/>

            <div className={styles.group}>
                <span className={styles.number}>{LeadingZero(timerSeconds)}</span>
                <span className={styles.text}>SEC</span>
            </div>
        </div>
    )
}

export default Timer;