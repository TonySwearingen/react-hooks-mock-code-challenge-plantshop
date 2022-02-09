import React, {useState} from "react";

function NewPlantForm({addPlantToState}) {
  const [nameInput, setNameInput] = useState("")
  const [imageInput, setImageInput] = useState("")
  const [priceInput, setPriceInput] = useState("")

 function handleSubmit(e) {
   e.preventDefault()
  const newPlantObj = {
    name: nameInput,
    image: imageInput,
    price: priceInput
  }
   addPlantToState(newPlantObj)
   addPlantToDatabasa(newPlantObj)
 }
 
 function addPlantToDatabasa(newPlantObj) {
   fetch(`http://localhost:6001/plants`, {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(newPlantObj)
   })
 }
 

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={(e) =>setNameInput(e.target.value)} value={nameInput} placeholder="Plant name" />
        <input type="text" name="image" onChange={(e) =>setImageInput(e.target.value)} value={imageInput} placeholder="Image URL" />
        <input type="number" name="price" onChange={(e) =>setPriceInput(e.target.value)} value={priceInput} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
