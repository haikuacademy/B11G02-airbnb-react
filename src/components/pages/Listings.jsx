import { houses } from '../../dummyData'
import HouseCard from '../ui/HouseCard'
import Nav from '../ui/Nav'
import { useState } from 'react'
import axios from 'axios'

function Listings() {
  // Define useState variables (using dummy data for listings)

  const [listings, setListings] = useState(houses)
  const [error, setError] = useState('')
  const [notValidEntry, setNotValidEntry] = useState({})
  const [newListing, setNewListing] = useState({})

  // Input Styling
  const inputStyle = 'border w-full rounded-sm pl-1'

  // Function to validate form
  const validateForm = (obj) => {
    // Define Arrays with Requirements

    let mustBeString = ['location', 'description']
    let mustBeNumber = ['rooms', 'price', 'bathrooms']

    let result = {}
    // Iterate through each object key
    Object.keys(obj).forEach((key) => {
      if (mustBeString.includes(key)) {
        // Validate if the property is a string and not a pure number
        const hasError = !isNaN(parseFloat(obj[key])) && isFinite(obj[key])
        result[key] = hasError
      } else if (mustBeNumber.includes(key)) {
        // Validate if the property can be converted to a number and is not NaN
        const value = Number(obj[key])
        const hasError = isNaN(value)
        result[key] = hasError
      }
    })

    setNotValidEntry(result)

    // IsValidNumber will be equal to true if any of the duplas have hasError: true
    return Object.values(result).includes(true)
  }

  // Create new house Function

  const createHouse = async (e) => {
    // Prevent page reload on form submission
    e.preventDefault()

    // Get data from the form

    let form = new FormData(e.target)
    let formObj = Object.fromEntries(form.entries())
    formObj.photos = form.getAll('photos')
    setNewListing(formObj)

    // Validate data before sending to API
    const formHasErrors = validateForm(formObj)

    // Return in case there are errors and prevent sending data to API
    if (formHasErrors) {
      return
    }

    // Send validated data to the API
    try {
      const response = await axios.post(
        'https://haiku-bnb.onrender.com/houses',
        newListing
      )
      if (response.data.error) {
        setError(response.data.error)
      }
    } catch (err) {
      setError(err.message)
    }

    // Update listings array with new house
    setListings([...listings, newListing])
  }

  // Start JSX file
  return (
    <div className="container mx-auto">
      <Nav />
      <form onSubmit={(e) => createHouse(e)}>
        <div className="grid grid-cols-2 gap-5 mb-3 border p-2 rounded">
          <div>
            <div className="mb-4">List a house</div>
            <div className="text-xs text-stone-500 mb-2">Location</div>
            <input
              name="location"
              required
              type="text"
              placeholder="Bali, Indonesia"
              className={inputStyle}
            />
            {notValidEntry.location && <NotStringError />}
            <div className="text-xs text-stone-500 mb-2 mt-2">Bedrooms</div>
            <input
              name="rooms"
              required
              type="text"
              placeholder="2"
              className={inputStyle}
            />
            {notValidEntry.rooms && <NotNumberError />}
            <div className="text-xs text-stone-500 mb-2 mt-2">Bathrooms</div>
            <input
              name="bathrooms"
              required
              type="text"
              placeholder="1"
              className={inputStyle}
            />
            {notValidEntry.bathrooms && <NotNumberError />}
            <div className="text-xs text-stone-500 mb-2 mt-2">
              Price per Night
            </div>
            <input
              name="price"
              required
              type="text"
              placeholder="$100"
              className={inputStyle}
            />
            {notValidEntry.price && <NotNumberError />}
            <div className="text-xs text-stone-500 mb-2 mt-2">Description</div>
            <textarea
              name="description"
              required
              rows="3"
              placeholder="Tell us about your place..."
              className="border w-full rounded-sm text-s pl-1"
            ></textarea>
            {notValidEntry.description && <NotStringError />}
            <button className=" bg-[#FF5A5F] border text-white pt-2 pb-2 pl-3 pr-3 rounded-md ">
              List House
            </button>
            {error && <div className="text-red-700">{error}</div>}
          </div>

          <div>
            <div className="text-xs text-stone-500 mt-10 mb-2">Photos</div>

            {/* Create the 9 image input fields */}
            {[...Array(9)].map((_, index) => (
              <PhotoInput key={index} />
            ))}
          </div>
        </div>
      </form>

      {/* Render the house cards for the listings */}
      <div className="grid grid-cols-5 gap-2">
        {houses.map((listing, id) => (
          <HouseCard key={id} house={listing} isListing={true} />
        ))}
      </div>
    </div>
  )
}

// EXTRA COMPONENTS
// Define Component for each input
function PhotoInput() {
  return (
    <input
      name="photos"
      required
      type="url"
      placeholder="https://www.h0tm0mpics.com/830298507.jpg"
      className="border w-full rounded-sm mb-2 pl-1"
    />
  )
}

function NotNumberError() {
  return <div className="text-red-600 text-sm">Please use only numbers</div>
}

function NotStringError() {
  return (
    <div className="text-red-600 text-sm">Please provide a valid input</div>
  )
}

export default Listings
