import React, { memo } from 'react'

const Child = ({props}) => {
  console.log("Props is a function lets invoke it")
  props()
  return (
    <div>
      This is nanbar
    </div>
  )
}

export default memo(Child)