import axios from 'axios'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faBed,
  faDollarSign,
  faSort
} from '@fortawesome/free-solid-svg-icons'

function Filters(props) {
  // Variables

  const [locations, setLocations] = useState([])

  // FUNCTIONS

  // Get list of locations for location filter
  useEffect(() => {
    const getLocations = async () => {
      try {
        const response = await axios.get(
          'https://haiku-bnb.onrender.com/locations'
        )
        setLocations(response.data)
      } catch (error) {
        alert(error.message)
      }
    }
    getLocations()
  }, [])

  // API call to get list of houses (filtered with form query)
  const getHouses = async (query) => {
    try {
      const response = await axios.get(
        'https://haiku-bnb.onrender.com/houses',
        {
          params: query
        }
      )
      props.setHouses(response.data)
    } catch (error) {
      alert(error.message)
    }
  }

  // Get data from filter form and build query
  const submitForm = (e) => {
    e.preventDefault()

    // Extract values and build query params
    let query = {}

    // Location
    if (e.target.location.value) {
      query.location = e.target.location.value
    }

    // min_rooms
    if (e.target.min_rooms.value) {
      query.min_rooms = e.target.min_rooms.value
    }

    // // max_price
    if (e.target.max_price.value) {
      query.max_price = e.target.max_price.value
    }

    // sort
    if (e.target.sort.value) {
      query.sort = e.target.sort.value
    }

    // search
    if (e.target.search.value) {
      query.search = e.target.search.value
    }

    // Call getHouses function pasing the query for the axio params
    getHouses(query)
  }

  // JSX

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className="flex justify-between gap-5 grid-cols-5 grid-rows-1 m-3 bg-stone-100 p-2">
        <div className="w-full">
          <FontAwesomeIcon
            icon={faHouse}
            className="absolute mt-2 ml-1.5 w-4 h-4 pointer-events-none"
          />
          <select name="location" className="w-full border pl-7 py-1 rounded">
            <option value="">Any Location</option>
            {/* Display an option for each location from the database */}
            {locations.map((location, i) => (
              <option key={i} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <div className="">
            <FontAwesomeIcon
              icon={faBed}
              className="absolute mt-2 ml-1.5 w-4 h-4 pointer-events-none"
            />
          </div>
          <div className="">
            <select
              name="min_rooms"
              className="w-full border pl-7 py-1 rounded"
            >
              <option value="">Any Rooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <FontAwesomeIcon
            icon={faDollarSign}
            className="absolute mt-2 ml-1.5 w-4 h-4 pointer-events-none"
          />
          <input
            name="max_price"
            className="border pl-7 py-1 rounded"
            type="number"
            placeholder="max price"
          />
        </div>
        <div className="w-full">
          <FontAwesomeIcon
            icon={faSort}
            className="absolute mt-2.5 ml-1.5 w-4 h-4 pointer-events-none"
          />
          <select name="sort" className="w-full border pl-7 py-1 rounded">
            <option value="">sort by</option>
            <option value="price">Price: low to high</option>
            <option value="rooms">Rooms: high to low</option>
          </select>
        </div>
        <div className="w-full">
          <input
            name="search"
            className="w-full border pl-2 py-1 rounded text-sm"
            type="text"
            placeholder="keywords..."
          />
        </div>
        <div>
          <button className=" bg-[#FF5A5F] border text-white p-2 rounded-md ">
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default Filters
