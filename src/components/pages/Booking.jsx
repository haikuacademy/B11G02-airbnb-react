import { useEffect, useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'
import axios from 'axios'

function BookingForm({ house }) {
  // Create useState variables for form

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  // Calculate nights and update variable when either startDate or endDate are changed
  useEffect(() => {
    if (startDate && endDate)
      setNights(differenceInCalendarDays(endDate, startDate))
  }, [startDate, endDate])

  // Calculate totalPrice when nights is higher than 0
  useEffect(() => {
    setTotalPrice(nights * house.price)
  }, [nights, house.price])

  const createBooking = async (e) => {
    // Step 1: Prevent the browser from reloading
    e.preventDefault()
    //Step 2: get data from form
    const form = new FormData(e.target)
    let formObject = Object.fromEntries(form.entries())

    const newBooking = {
      house_id: house.id,
      from_date: formObject.from_date,
      to_date: formObject.to_date,
      message: formObject.message
    }
    try {
      const response = await axios.post(
        'https://haiku-bnb.onrender.com/bookings',
        newBooking
      )
      if (response.data.booking_id) {
        setBookingConfirmed(true)
      }
    } catch (error) {
      console.error('Error creating booking', error)
    }
  }
  if (bookingConfirmed) {
    return <p>Thank you for your reservation!</p>
  }
  return (
    <div className="col-span-1">
      <div className="grid gap-2 border rounded border-[#E5E7EB] p-3 mb-4">
        <h6 className="font-bold">
          ${house.price}
          <span className="text-sm text-gray-400"> / night</span>
        </h6>
        <form onSubmit={createBooking} className="flex flex-col gap-2 w-full ">
          <div className="flex gap-2">
            <div className="flex flex-col">
              <label className="text-sm font-thin text-gray-400">
                Check-in
              </label>
              <input
                onChange={(e) => setStartDate(e.target.value)}
                className="border gap-2 pl-1"
                type="date"
                name="from_date"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-thin text-gray-400">
                Check-out
              </label>
              <input
                onChange={(e) => setEndDate(e.target.value)}
                className="border pl-1"
                type="date"
                name="to_date"
              />
            </div>
          </div>
          <textarea
            rows="7"
            className="border w-full resize-none pl-1"
            placeholder="Please send a message to the host..."
            name="message"
          ></textarea>
          <div className="flex justify-between items-center">
            <TotalBookingSpan nights={nights} totalPrice={totalPrice} />
            <button
              className="rounded bg-[#FB7185] text-white p-1 px-2 disabled:bg-gray-300"
              disabled={nights <= 0}
            >
              Reserve
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function TotalBookingSpan({ nights, totalPrice }) {
  // Don't display anything if nights = 0

  if (nights === 0) {
    return <></>
  }
  // Throws error if nights is negative

  if (nights < 0) {
    return (
      <span className="font-bold text-red-700">
        Check-out date must be <br />
        after the check-in date
      </span>
    )
  }
  // If nights >= 0, we render the span with the number of nights and total price

  return (
    <span>
      {nights} nights =<span className="font-bold"> $ {totalPrice}</span>
    </span>
  )
}

export default BookingForm
