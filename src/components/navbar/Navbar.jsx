import styles from './Navbar.module.css'
import navImage from '../../assets/project-logo-wordmark-orangeHi-Res.png'
import { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className={styles.nav}>
            <ul className={styles.left}>
                <li>SHOP</li>
                <li>ABOUT</li>
                <li>LEARN</li>
            </ul>
            <div className={styles.logo}>
                <img src={navImage} alt='logo' />
            </div>
            <ul className={styles.right}>
                <li className={styles.search}>SEARCH</li>
                <li className={styles.cart}>
                    CART<span className={styles.cartNumber}>0</span>
                </li>
            </ul>

                  {/* Hamburger (mobile) */}
      <div className={styles.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {/* Mobile drawer menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
            <button
      className={styles.closeBtn}
      onClick={() => setOpen(false)}
    >
      X
    </button>
          <ul>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>LEARN</li>
            <li>SEARCH</li>
            <li>CART (0)</li>
          </ul>
        </div>
      )}

        </nav>
    )
}

export default Navbar

