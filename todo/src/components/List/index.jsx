import React from 'react'
import Item from './components/Item'
import './index.less'

function List() {
  return (
    <ul className='todo-main'>
      <Item/>
      <Item/>
      <Item/>
    </ul>
  )
}

export default List