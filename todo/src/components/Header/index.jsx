import React from 'react'
import './index.less'

function Header(props) {
  const { addNewTodo } = props

  const publish = (e) => {
    //? If the key pressed is not 'Enter,' do not execute the code
    if (e.keyCode !== 13) return

    //? If nothing is entered, do not execute neither the code
    const userInput = e.target.value.trim()
    if (!userInput) return

    //? usually, the 'id' should be gotten from backend, but there is NOT the backend here, so we take the below operation like this
    addNewTodo({ id: Date.now(), thing: userInput, done: false })

    //? Clear the input box
    e.target.value = ''
  }
  
  return (
    <div className='todo-header'>
      <input
        type='text'
        placeholder='Please enter your task name and press Enter to confirm'
        onKeyUp={publish}
      />
    </div>
  )
}

export default Header
