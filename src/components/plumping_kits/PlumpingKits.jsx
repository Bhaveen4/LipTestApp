
import ProductCard from '../product_card/ProductCard'
import styles from './PlumpingKits.module.css'
import { products } from '../../data/ProductData'
import Button from '../button/Button'


const PlumpingKits = () => {
  return (

    <>
    <div className={styles.headingContainer}>
        <h2 >PLUMPING KITS</h2>
        <Button btnStyle={styles.btn}>SHOP ALL KITS</Button>
    </div>
    
       <div className={styles.grid}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    </>

  )
}

export default PlumpingKits
