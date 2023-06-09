import style from './Card.module.css'
import { NavLink } from 'react-router-dom';
import { addFav, removeFav} from '../../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react' // Para traerme el estado local

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {

      const [isFav, setIsFav] = useState(false)

      const handleFavourite = () => {
         if (isFav) {
            setIsFav(false)
            removeFav(id)
         }
         else {
            setIsFav(true)
            addFav({id, name, status, species, gender, origin, image, onClose})
         }
      }

      useEffect (() => {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true)
            }
         })
      }, [myFavorites])

   return (
      <div className={style.card}>
         <button 
            onClick={() => onClose(id)} 
            className={style.button}
            >X
         </button>

         <button onClick={handleFavourite}>{isFav? '❤️': '🤍'}</button>
         
         <img 
            src={image} 
            alt='' 
            className={style.img}
         />

         <NavLink to={`/detail/${id}`}>
            <h2 className={style.name}>{name}</h2>
         </NavLink>

         <h2 className={style.status}>{status}</h2>
         <h2 className={style.species}>{species}</h2>
         <h2 className={style.gender}>{gender}</h2>
         <h2 className={style.origin}>{origin}</h2>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
) (Card)