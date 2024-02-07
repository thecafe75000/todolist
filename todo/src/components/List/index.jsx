import React from 'react'
import Item from './components/Item'
import './index.less'

function List(props) {
  const { todoList, changeSingleState, deleteSingleItem } = props
  return (
    <ul className='todo-main'>
      {
        todoList.map((item, index)=> {
          return (
            <Item
              key={item.id}
              {...item}
              index={index}
              changeSingleState={changeSingleState}
              deleteSingleItem={deleteSingleItem}
            />
          )
        })
      }
    </ul>
  )
}

export default List