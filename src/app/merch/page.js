import styles from "./merch.module.css"

export default function Merch() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headeritemcontainer}>
        <div className={styles.headeritem}>item</div>
        <div className={styles.headeritem}>item</div>
        <div className={styles.headeritem}>item</div>  
        </div>
        </div>
        <div className={styles.title}>Stillmonsters</div> 

        <div className={styles.message}><h2>NEW ALBUM OUT NOW</h2></div>

        <div className={styles.productcontainer}>  
        <img src='https://controlindustry.com/cdn/shop/products/SURPRISEMERCHBAG-blue_55fe24bb-ab67-49e6-a76e-119617b4f3cb.png'/>
        <div className={styles.productTextContainer}>
        <div className={styles.productDisplayText}>Name</div>
        <div className={styles.productDisplayText}>Desc</div>
        <div className={styles.productDisplayText}>$Price</div>
        </div>
        </div>  
    </main>
  );
}
