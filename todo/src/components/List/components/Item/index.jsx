import React, { useState } from 'react'
import './index.less'

function Item(props) {
  const { id, thing, done, index, changeSingleState } = props

  //? Define a data to store the index of the 'li' tag when the mouse hovers over it
  const [mouseIndex, setMouseIndex] = useState(-1)

  //? When the mouse hovers over an 'li' tag, set the index of the current 'li' to the 'mouseIndex'
  //? When the mouse moves out, set the current 'mouseIndex' to -1
  //? Apply the 'active' className to the 'li' tags based on a condition and realize conditional rendering
  return (
    <li
      className={index === mouseIndex ? "active" : ""}
      onMouseEnter={() => {
        setMouseIndex(index)
      }}
      onMouseLeave={() => {
        setMouseIndex(-1)
      }}
    >
      <label>
        <input type='checkbox' checked={done} onChange={(e) => {changeSingleState(id, e.target.checked)}} />
        <span>{thing}</span>
      </label>
      <button className='btn btn-danger'>Delete</button>
    </li>
  )
}

export default Item
