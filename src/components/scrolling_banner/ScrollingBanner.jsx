import Marquee from "react-fast-marquee";
import styles from './ScrollingBanner.module.css'

const ScrollingBanner = ({ messages }) => {
  return (
    <Marquee className={styles.marquee}>
      {messages.map((message, index) => (<span className={styles.span} key={index}>
        {message}
      </span>))}
    </Marquee>
  )
}

export default ScrollingBanner
