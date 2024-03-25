import Gallery from '../ui/Gallery'
import Reviews from '../ui/Reviews'
import Nav from '../ui/Nav'
import axios from 'axios'
import BookingForm from './Booking.jsx'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faUser } from '@fortawesome/free-solid-svg-icons'

function House() {
  // Declare house useState variable
  const [house, setHouse] = useState(undefined)
  const { id } = useParams()

  // Fetch data from API when component loads
  useEffect(() => {
    // Define function to Fetch data from the API
    const getHouse = async () => {
      try {
        const { data } = await axios.get(
          'https://haiku-bnb.onrender.com/houses/' + id
        )
        setHouse(data)
      } catch (error) {
        alert(error.message)
      }
    }

    getHouse()
  }, [id])

  return (
    <div className="container mx-auto">
      {/* Navigation Menu */}
      <Nav />

      {/* Body of the page */}

      <div className="flex flex-col p-4 gap-5">
        {/* Images on page */}

        {/* Gallery */}
        {house ? (
          <Gallery images={house.images} />
        ) : (
          <div className="flex h-[396px] items-center justify-center border">
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-lg animate-spin"
            />
          </div>
        )}

        {/* House Info & Booking */}

        <div className="flex justify-between ">
          {/* House Info */}

          <div className="w-2/3 flex flex-col gap-5">
            <div>
              <p className="text-xl font-bold">
                {house ? house.location : <span>Location</span>}
              </p>
              <p className="text-xs text-[#64748B]">
                {house?.rooms} Rooms · {house?.bathrooms} Bathrooms
              </p>
            </div>
            <div className=" flex gap-3">
              {house ? (
                <img
                  className="h-12 rounded-full"
                  src={house.host.picture}
                  alt="user"
                />
              ) : (
                <div className="flex h-12 w-12 justify-center items-center ">
                  <FontAwesomeIcon icon={faUser} className="text-xl" />
                </div>
              )}
              <div>
                <p className="text-sm text-[#64748B]">Hosted By</p>
                <p>
                  {house?.host.firstName} {house?.host.lastName}
                </p>
              </div>
            </div>
            <div className="text-sm">{house?.description}</div>
          </div>
          <div className="align-top">
            <BookingForm house={house ?? {}} />
          </div>
        </div>

        {/* Reviews & Review Form*/}
        <div className="flex justify-between border-t border-[#E5E7EB] pt-10">
          {/* Reviews List */}
          <div className="w-2/3 flex flex-col gap-5">
            <Reviews />
          </div>

          {/* Leave a Review Form */}
          <div className="align-top">
            <LeaveReviewForm />
          </div>
        </div>
      </div>
    </div>
  )
}

// COMPONENT: Booking Form

;<BookingForm />

function LeaveReviewForm() {
  return (
    <div className="border rounded border-[#E5E7EB] p-4 gap-3">
      <div>Leave a Review</div>
      <div>0</div>
      <div>
        <textarea className="w-full border-black-500 border-2 rows-5"></textarea>
        <button className="rounded bg-[#FB7185] text-white p-1 px-2">
          Submit
        </button>
      </div>
    </div>
  )
}

export default House
