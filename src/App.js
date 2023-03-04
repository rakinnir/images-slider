import { useState } from "react"
import "./App.css"
import { FcPrevious, FcNext } from "react-icons/fc"

function App() {
  const [imageNo, setImageNo] = useState(0)
  const images = [
    "image (1)",
    "image (2)",
    "image (3)",
    "image (4)",
    "image (5)",
    "image (6)",
    "image (7)",
    "image (8)",
    "image (9)",
    "image (10)",
  ]
  const currentImage = "/images/" + images[imageNo] + ".jpg"

  function handlePrev() {
    if (imageNo > 0) {
      setImageNo((prev) => prev - 1)
    } else {
      setImageNo(images.length - 1)
    }
  }

  function handleNext() {
    if (imageNo === images.length - 1) {
      setImageNo(0)
    } else {
      setImageNo((prev) => prev + 1)
    }
  }

  return (
    <>
      <div>
        <h1 className="heading">IMAGE CAROUSEL</h1>
      </div>
      <div className="App">
        <img src={currentImage} alt="" />
        <FcPrevious className="button prev" onClick={handlePrev} />
        <FcNext className="button next" onClick={handleNext} />
      </div>
    </>
  )
}

export default App
