import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import Stars from './stars'

function HouseCard(props) {
  const booking = props.booking
  const isBooking = props.isBooking
  const house = props.house
  const isListing = props.isListing

  const bookingPart = (
    <div className="bg-[#ECFDF5] flex flex-col gap-1 text-center">
      <span className="text-xs mt-2 ">
        {booking ? booking.arrival + ' - ' + booking.departure : null}
      </span>
      <div className="font-bold text-sm mb-2">3 nights = $350</div>
    </div>
  )

  return (
    <Link to="/houses/:house_id" className="">
      <div className="border border-solid border-stone-200 rounded-lg gap-3 hover:shadow-lg">
        <div className="rounded-t-lg justify-center">
          <img
            src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png"
            alt="House Photos"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <p className="font-bold text-l">{house.location}</p>
          <p className="font-thin text-sm text-[#64748B]">
            {house.rooms} Rooms · {house.bathrooms} Bathrooms
          </p>
          <p className="font-bold text-lg mt-2">${house.price}</p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="">
                <Stars rating={house.rating} />
              </div>
              <div className="">{house.rating}</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="">34</div>
              <div className="">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="text-[#94A3B8]"
                />
              </div>
            </div>
          </div>
          {isListing && (
            <div className="grid grid-cols-4 gap-2 mt-2">
              <Link to="/houses/1" className="">
                <button className="bg-[#FF5A5F] text-white border p-2 col-span-1 rounded-md">
                  View
                </button>
              </Link>
              <Link to="/houses/1/edit">
                <button className="bg-[#FF5A5F] text-white border p-2 col-span-1 rounded-md">
                  Edit
                </button>
              </Link>
            </div>
          )}
          {isBooking ? bookingPart : null}
        </div>
      </div>
    </Link>
  )
}

export default HouseCard
