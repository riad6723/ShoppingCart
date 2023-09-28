import React from 'react';
import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.productImg}>
        <img src="http://bit.ly/2tMBBTd" height="420" width="327" alt="Product" />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productText}>
          <h1>Harvest Vase</h1>
          <h2>by studio and friends</h2>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem doloremque ex ipsam voluptates vel eos recusandae consectetur hic harum, explicabo obcaecati dolores soluta. Molestias reiciendis nemo assumenda itaque iure.
          </p>
        </div>
        <div className={styles.productPriceBtn}>
          <p><span className={styles.span}>78</span>$</p>
          <button type={styles.button}>add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
