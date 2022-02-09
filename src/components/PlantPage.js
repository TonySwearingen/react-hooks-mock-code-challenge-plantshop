import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState(plants)

  function handleSearch(e) {
    const filteredPlants = plants.filter(plant => {
      return plant.name.includes(e.target.value)
    })
    setFilteredPlants(filteredPlants)
  }
  
  useEffect (() => {
    fetch(`http://localhost:6001/plants`)
    .then((res) => res.json())
    .then((plantArray) => {
      setPlants(plantArray)
      setFilteredPlants(plantArray)})
}, [])

  function addPlantToState(plantObj) {
    setPlants([...plants, plantObj])
  }


  return (
    <main>
      
      <NewPlantForm addPlantToState={addPlantToState} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
