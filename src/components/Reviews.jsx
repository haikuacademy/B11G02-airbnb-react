import Nav from './Nav'
export default function Reviews() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="flex grid-cols-2 grid-rows-1 gap-2 bg-sky-200">
        <Review />
        <Review />
      </div>
    </div>
  )
}

function Review() {
  return <div className="bg-sky-500">Review</div>
}