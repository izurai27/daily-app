import React from 'react'

const RecipeAdded = (props) => {
  const title = props.recipetitle
  console.log(title)
  return (
    <div>
      <h1>Recipes Added :</h1>
      <ul>
        {title.map(element => {
          return(
            <li key={element._id}>{element.title}</li>
          )
        })}
      </ul>
    </div>

    
  )
}

export default RecipeAdded