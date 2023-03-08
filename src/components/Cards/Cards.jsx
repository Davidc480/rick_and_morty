import React from 'react';
import Card from '../Card/Card';

export default function Cards({characters}) {
const onClose=() => window.alert(`La card de se ah cerrado `)

      return (
        <div>
         
      {characters.map(({name, species, gender, image}) => {
         return (
            <Card
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
            />
            )
         })} 
         </div>
      )
}
