import HouseCard from '../ui/HouseCard'
import Filters from '../ui/Filters'
import Nav from '../ui/Nav'
import { useState, useEffect } from 'react'

import axios from 'axios'

function Houses() {
  const [houses, setHouses] = useState([])

  const getHouses = async () => {
    let { data } = await axios.get('https://haiku-bnb.onrender.com/houses')
    setHouses(data)
  }

  useEffect(() => {
    getHouses()
  }, [])

  return (
    <div className="container mx-auto">
      <Nav />
      {/* Filters */}
      <Filters setHouses={setHouses} />

      {/* Show HouseCards for filtered Houses */}
      <div className="grid gap-4 grid-cols-5 grid-rows-2 mt-3">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  )
}

export default Houses
