import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCommentDots } from '@fortawesome/free-solid-svg-icons'

function HouseCard() {
  return (
    <Link to="/houses/1" className="">
      <div className="border border-solid border-stone-200 rounded-lg gap-3 hover:shadow-lg">
        <div className="rounded-t-lg justify-center">
          <img
            src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png
"
            alt="House Photos"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <p className="font-bold text-l">Phuket, Thailand</p>
          <p className="font-thin text-sm text-[#64748B]">
            2 Rooms · 2 Bathrooms
          </p>
          <p className="font-bold text-lg mt-2">$120</p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
              </div>
              <div className="">5</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="">34</div>
              <div className="">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="text-[#94A3B8] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HouseCard