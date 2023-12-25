import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  //Set state for name, cuisine, photo, ingredients, and preparation
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  // When the form is submitted, a new recipe should be created, and the form contents cleared.
  const handleSubmit = (event) => {
    event.preventDefault();
    const recipe = {name, cuisine, photo, ingredients, preparation};
    addRecipe(recipe);
    
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }
  // Form fields. On submit call handleSubmit
  return (
    <form name="create" onSubmit = {handleSubmit}>
      <table>
        <tbody>
          <tr>
             <td>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                value={cuisine}
                onChange={(event) => setCuisine(event.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                name="photo"
                value={photo}
                onChange={(event) => setPhoto(event.target.value)} 
              />
            </td>
            <td>
              <textarea
                type="textarea"
                name="ingredients"
                value={ingredients}
                onChange={(event) => setIngredients(event.target.value)}
                
              />
            </td>
            <td>
              <textarea
                type="textarea"
                name="preparation"
                value={preparation}
                onChange={(event) => setPreparation(event.target.value)}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
