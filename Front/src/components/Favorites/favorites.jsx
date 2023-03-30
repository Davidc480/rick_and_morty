import { useSelector } from "react-redux"




const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites)
    return(
        <>
        {favorites.map(({id, name, species, gender, image}) => {
                return ( <Card
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                />
            );
         })}
        </>
    );
};

export default Favorites;