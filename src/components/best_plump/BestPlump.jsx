import styles from './BestPlump.module.css'
import ProductCard from '../product_card/ProductCard'
import Button from '../button/Button'
import { products } from '../../data/ProductData'

const BestPlump = () => {
  return (
    <>
      <div className={styles.headingContainer}>
        <h2>BEST IN PLUMP</h2>
        <Button>NEXT</Button>
      </div>
      <div className={styles.mainGrid} >
        <div className={styles.highlight}>
          <div >
            <Button >SHOP ALL</Button>
          </div>

        </div>
        <div>
          <div className={styles.grid}>
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>

  )
}

export default BestPlump
