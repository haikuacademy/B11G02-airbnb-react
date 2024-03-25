import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import React, { useState, useEffect } from 'react'
// import { reviews } from '../../dummyData.js'
import Stars from './stars'
import axios from 'axios'

export default function Reviews(props) {
  const [reviews, setReviews] = useState([])
  const house_id = props?.house_id ?? 1

  useEffect(() => {
    const getReviews = async () => {
      const url = 'https://haiku-bnb.onrender.com/reviews?house_id=' + house_id
      const response = await axios.get(url)
      setReviews(response.data)
    }
    getReviews()
  }, [house_id])

  return (
    <div className="container mx-auto gap-2">
      <div className="flex gap-2 items-center">
        <div className="inline">
          <FontAwesomeIcon icon={faCommentDots} className="text-[#94A3B8]" />
          <span className="text-lg font-bold"> 34 Reviews</span>
          <div>
            <span className="text-sm">Average Rating: 2.3 </span>

            <FontAwesomeIcon icon={faStar} className="text-[#FBBF24]" />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {reviews.map((review, i) => (
          <React.Fragment key={i}>
            <Review review={review} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

function Review({ review }) {
  const { author, content, rating, date } = review
  return (
    <div className="border border-solid border-[#E5E7EB] rounded-lg p-3 m-2 text-sm">
      {/* Author Box */}
      <div className="flex gap-2 items-center">
        <div className="w-12 h-12 border-2 border-solid border-white rounded-full">
          <img className="rounded-full" src={author.picture} alt="reviewer" />
        </div>
        <div>
          <div className="text-[#94A3B8] text-sm">{date}</div>
          <div className="text-lg">
            {author.firstName} {author.lastName}
          </div>
        </div>
      </div>
      <div className="flex gap-2 my-2">
        <Stars rating={rating} />
        <span>{rating}</span>
      </div>
      <div className="flex">
        <p>{content}</p>
      </div>
    </div>
  )
}
