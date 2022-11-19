import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";
const Loader = () => {
  return (
    <div className="flex items-center justify-center w-screen height">
    <MoonLoader
      color="black"
      loading="true"
      speedMultiplier={1}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
  )
}

export default Loader
