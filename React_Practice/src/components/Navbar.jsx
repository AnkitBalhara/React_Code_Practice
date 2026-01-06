import React, {memo} from 'react'

const Navbar = ({ex,hanuman}) => {
    hanuman()
    // console.log("Jai Shree Ram")
    console.log("Jai Shree Ram",ex)
  return (
    <div>
      Jai Shree Ram
    </div>
  )
}

// export default Navbar
export default memo(Navbar)
