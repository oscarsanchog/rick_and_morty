import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div /* className={style.SearchBar} */>
         <input 
            className={style.searchInput}
            onChange={handleChange}
            value={id}
            type='search'
         />
         <button 
            className={style.searchButton} 
            onClick={() => {
               onSearch(id)
               setId('')}
            }
            >Agregar
         </button>
      </div>
   );
}
