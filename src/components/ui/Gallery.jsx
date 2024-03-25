import { useState } from 'react'
function Gallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0])
  return (
    <div className="grid sm:grid-cols-2 gap-2">
      {/* Featured Picture */}
      <div className="rounded-md md:min-h-[200px] sm:min-h-[100px]">
        <div
          className="bg-cover rounded bg-center"
          style={{ height: '100%', backgroundImage: 'url(' + mainImage + ')' }}
        ></div>
      </div>

      {/* Gallery Pictures*/}
      <div className="grid gap-1.5 md:grid-cols-3 sm:grid-cols-2hover:shadow-md rounded-md h-auto">
        {images.map((image, i) => (
          <div
            className="bg-cover bg-center rounded cursor-pointer"
            onClick={(event) => {
              console.log(image)
              setMainImage(image)
            }}
            style={{ height: '8rem', backgroundImage: 'url(' + image + ')' }}
          />
        ))}
      </div>
    </div>
  )
}
export default Gallery
