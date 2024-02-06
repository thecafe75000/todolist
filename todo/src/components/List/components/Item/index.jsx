import React from 'react'
import './index.less'

function Item(props) {
  const {id, thing, done} = props
  return (
    <li>
      <label>
        <input type='checkbox' checked={done} onChange={()=>{} } />
        <span>{thing}</span>
      </label>
      <button className='btn btn-danger' style={{ display: 'none' }}>
        Delete
      </button>
    </li>
  )
}

export default Item
