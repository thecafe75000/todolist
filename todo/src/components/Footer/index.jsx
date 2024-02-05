import React from 'react'
import './index.less'

function Footer() {
  return (
    <div className='todo-footer'>
      <label>
        <input type='checkbox' />
      </label>
      <span>
        <span>Completed0</span> / All2
      </span>
      <button className='btn btn-danger'>Clear completed tasks</button>
    </div>
  )
}

export default Footer