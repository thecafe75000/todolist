import React from 'react'
import Item from './components/Item'
import './index.less'

function List(props) {
  const {todoList} = props
  return (
    <ul className='todo-main'>
      {
        todoList.map((item, index)=> {
          return (
            <Item key={item.id} {...item} index={ index} />
          )
        })
      }
    </ul>
  )
}

export default List