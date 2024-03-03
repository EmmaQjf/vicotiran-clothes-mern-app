import styles from './LineItem.module.scss'
// export default function LineItem(){
//     return (
//         <h1>This is the LineItem</h1>
//     )
// }

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
    return (
      <div className={styles.LineItem}>
        <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineItem.item.title}</span>
        <span className="align-ctr">{lineItem.item.img}</span>
          <span>{lineItem.item.price.toFixed(2)}</span>
        </div>
        <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
          {!isPaid &&
            <button
              className="btn-xs"
              onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
            >−</button>
          }
          <span>{lineItem.qty}</span>
          {!isPaid &&
            <button
              className="btn-xs"
              onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
            >+</button>
          }
        </div>
        <div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div>
      </div>
    );
        }