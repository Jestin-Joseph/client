import React from 'react'
import styles from './SearchResultCard.module.css'
import { BookOpenText } from 'lucide-react';
// import { Info } from 'lucide-react';

function SearchResultCard({id, docName, occur, origin, author, avail}) {
  return (
    <div className={styles.card_container}>
        {/* <Info size={15} className={styles.info_icon}/> */}
        <span>
            <BookOpenText className={styles.icon} size={40}/>
        </span>
        <span>
            <p>{docName}</p>
            <p>{author}</p>
        </span>
        <span>
             <p>{occur} occurences</p>
        </span>
    </div>
  )
}

export default SearchResultCard