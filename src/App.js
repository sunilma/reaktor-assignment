import './App.css';

import { useEffect, useState } from 'react'

import Gloves from './components/Gloves'
import Facemasks from './components/Facemasks'
import Beanies from './components/Beanies'

import { getProducts, getAvailability } from './utils/productsApi'

function App() {

  const [gloves, setGloves] = useState([])
  const [facemasks, setFacemasks] = useState([])
  const [beanies, setBeanies] = useState([])

  const [manufacturer, setManufacturer] = useState([])



  const [nav, setNav] = useState("gloves")

  const getManufacturer = (category) => category.map((item) => item.manufacturer)

  const getAllAvailability = async (gloveList, facemaskList, beanieList) => {
    const manufacturers = [...getManufacturer(gloveList), ...getManufacturer(facemaskList), ...getManufacturer(beanieList)]
    const unique = [... new Set(manufacturers)]
    const temp = await  Promise.all(unique.map(async (item) => {
      const data = await getAvailability(item)
      return {seller: item, availability: data}
    }))
    console.log(temp)
    setManufacturer(temp)
    
  }

useEffect(() => {

  const getData = async () => {
    const gloveSetter = await getProducts("gloves")
    const facemaskSetter = await getProducts("facemasks")
    const beanieSetter = await getProducts("beanies")
    getAllAvailability(gloveSetter, facemaskSetter, beanieSetter)
    setGloves(gloveSetter)
    setFacemasks(facemaskSetter)
    setBeanies(beanieSetter)
  }
  getData()
}, []);

const router = () => {
  switch (nav) {
    case "gloves":
      return <Gloves gloves={gloves} manufacturer={manufacturer} /> 
      
    case "facemasks":
      return <Facemasks facemasks={facemasks} manufacturer={manufacturer} />

    case "beanies":
      return <Beanies beanies={beanies} manufacturer={manufacturer} />
      
    default:
      return
      
  }
}

  return (
    <div className="App container">
      <h2>M&M Clothing Store</h2>
      <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1" style={{cursor: "pointer"}} onClick={() => setNav("gloves")}>Gloves</span>
        <span className="navbar-brand mb-0 h1" style={{cursor: "pointer"}} onClick={() => setNav("facemasks")}>Facemasks</span>
        <span className="navbar-brand mb-0 h1" style={{cursor: "pointer"}} onClick={() => setNav("beanies")}>Beanies</span>
      </nav>
      {router()}
    </div>
  );
}


export default App;

