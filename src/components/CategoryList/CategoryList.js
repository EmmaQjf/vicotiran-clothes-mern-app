// export default function CategoryList(){
//     return (
//         <h1>This is the CategoryList</h1>
//     )
// }
import styles from './CategoryList.module.scss';

export default function CategoryList({ categories, allcategories, activeCat, setActiveCat,setShowClothPage}) {
  const cats = allcategories.map(cat =>
    <li
      key={cat}
      className={cat === activeCat ? styles.active : ''}
      // FYI, the below will also work, but will give a warning
      // className={cat === activeCat && 'active'}
      onClick={() => {setActiveCat(cat);setShowClothPage(true)}}
    >
      {cat}
    </li>
  );
  return (
    <ul className={styles.CategoryList}>
      {cats}
    </ul>
  );
}