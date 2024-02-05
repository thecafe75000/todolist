import React from 'react'
import './index.less'

function Header() {
  return (
    <div className='todo-header'>
      <input
        type='text'
        placeholder='Please enter your task name and press Enter to confirm'
      />
    </div>
  )
}

export default Header
