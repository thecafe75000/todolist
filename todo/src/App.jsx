import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import List from '@/components/List'
import Footer from '@/components/Footer'
import './App.less'
import { reqTodolist } from '@/api'

function App() {
  //? Initialize a state specifically designed to store the list data retrieved from requests
  const [todoList, setTodoList] = useState([])

  //? The method getTodolist is placed here to allow for repeated invocation
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

  return (
    <div className='todo-container'>
      <div className='todo-wrap'>
        <Header />
        <List todoList={ todoList } />
        <Footer />
      </div>
    </div>
  )
}

export default App
