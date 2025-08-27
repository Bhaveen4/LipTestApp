import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ 
  image, 
  discount, 
  title, 
  subtitle, 
  price, 
  oldPrice, 
  colors = [] 
}) => {
  return (
    <div className={styles.cardContainer}>

    <div className={styles.imageContainer}>

{/* Product Image */}
      <img src={image} alt={title} className={styles.image} />
    {/* Discount Tag */}
      {discount && (
        <span className={styles.discount}>{discount}% OFF</span>
      )}
    </div>






       <div className={styles.card}>
      
      {/* Title */}
      <h3 className={styles.title}>{title}</h3>
      
      {/* Subtitle */}
      <p className={styles.subtitle}>{subtitle}</p>

      {/* Price Section */}
      <div className={styles.priceSection}>
        <span className={styles.price}>£{price}</span>
        {oldPrice && (
          <span className={styles.oldPrice}>£{oldPrice}</span>
        )}
      </div>

      {/* Color Options */}
      {colors.length > 0 && (
        <div className={styles.colors}>
          {colors.map((color, index) => (
            <span
              key={index}
              className={styles.colorDot}
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      )}
    </div>

    
    </div>
 


  );
};

export default ProductCard;

