import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import List from '@/components/List'
import Footer from '@/components/Footer'
import './App.less'
import { reqTodolist } from '@/api'

function App() {
  //? Initialize a state specifically designed to store the list data retrieved from requests
  const [todoList, setTodoList] = useState([])

  //? Method1:The method getTodolist is placed here to allow for repeated invocation
  //? Request todoList data and set the retrieved data to the state
  const getTodolist = async () => {
    const result = await reqTodolist()
    console.log('result', result.data)
    setTodoList(result.data)
  }


  //? Send an Ajax request to fetch initialization data, this operation must be completed within the useEffect
  useEffect(() => {
    getTodolist()
  }, [])


  //? Method2: Modify the selected state of a single item in the 'todo' list
  const changeSingleState = (id,newType) => {
    //! attention: NOT directly modify the data within the state; you must obtain new data and then use the 'setXXX' to update the data
    const newTodoList = todoList.map((item) => {
      //? Iterate through the array and check if the current 'id' matches the modified 'id'
      return item.id === id ? { ...item, done: newType } : item
    })

    //? Responsively modify the state
    setTodoList(newTodoList)
  }

  return (
    <div className='todo-container'>
      <div className='todo-wrap'>
        <Header />
        <List todoList={todoList} changeSingleState={changeSingleState} />
        <Footer />
      </div>
    </div>
  )
}

export default App
