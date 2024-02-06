import React from 'react'
import Item from './components/Item'
import './index.less'

function List(props) {
  const {todoList} = props
  return (
    <ul className='todo-main'>
      {
        todoList.map(item => {
          return (
            <Item key={item.id} {...item} />
          )
        })
      }
    </ul>
  )
}

export default List