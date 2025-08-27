import styles from './Hero.module.css'
import heroImg from '../../assets/hero_image.webp'
import Navbar from '../navbar/Navbar'
import Button from '../button/Button'

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.topBar}>
        FREE UK SHIPPING ON ORDERS OVER £40
      </div>

      <Navbar/>

      
         <div className={styles.content}>
        <div className={styles.textBox}>
          <h1>
            BIG LIPS,<br /> BIGGER ENERGY
          </h1>
          <p>
            Our famous lip liner lines, fills and plumps so you can cheat <br/> your
            way to an instant lip lift.
          </p>
          <Button btnStyle={styles.btn}>SHOP PLUMP & FILL</Button>
          
        </div>
        
      </div>
     

    </section>
  )
}

export default Hero
