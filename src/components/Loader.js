import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";
const Loader = () => {
  return (
    <div className="flex items-center justify-center w-screen ">
      <MoonLoader
        color="black"
        loading="false"
        speedMultiplier={1}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  </div>
  )
}

export default Loader
