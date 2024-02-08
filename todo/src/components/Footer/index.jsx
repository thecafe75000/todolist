import React from 'react'
import './index.less'

function Footer(props) {
  const { todoList, allItemsChecked, clearAll } = props
  
  return (
    <div className='todo-footer'>
      <label>
        <input type='checkbox'
          checked={todoList.every(item => item.done) && todoList.length !== 0}
          onChange={(e) => { allItemsChecked(e.target.checked) }} />
      </label>
      <span>
        <span>Chosen {
          todoList.reduce((prev, current) => {
            return current.done ? prev+1: prev
        }, 0)}</span> / All {todoList.length}
      </span>
      <button className='btn btn-danger' onClick={()=>{clearAll()}}>Clear all chosen tasks</button>
    </div>
  )
}

export default Footer