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
  const changeSingleState = (id, newType) => {
    //! attention: CAN NOT directly modify the data within the state; you must obtain new data and then use the 'setXXX' to update the data
    const newTodoList = todoList.map((item) => {
      //? Iterate through the array and check if the current 'id' matches the modified 'id'
      return item.id === id ? { ...item, done: newType } : item
    })

    //? Responsively modify the state
    setTodoList(newTodoList)
  }

  //? Method3: Delete a specific item from the todolist
  /**
   * 删除数组的值使用到的方法:
   *    1- 删除单个：splice 或 filter
   *    2- 删除多个：filter
   * 注意：splice会修改原数组，filter是返回新数组，不修改原数组
   */
  const deleteSingleItem = (index) => {
    todoList.splice(index, 1)
    setTodoList([...todoList])
  }

  //? Method4: Add a new item to the todolist
  const addNewTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList])
  }

  //? Method5: Modify the status of all items (all items are checked)
  const allItemsChecked = (type) => {
    const newTodoList = todoList.map((item) => {
      return { ...item, done: type }
    })

    setTodoList(newTodoList)
  }

  //? Method6: Clear all chosen tasks
  const clearAll = () => {
    const itemChecked = todoList.filter(item => !item.done)
    setTodoList(itemChecked)
  }

  return (
    <div className='todo-container'>
      <div className='todo-wrap'>
        <Header addNewTodo={addNewTodo} />
        <List
          todoList={todoList}
          changeSingleState={changeSingleState}
          deleteSingleItem={deleteSingleItem}
        />
        <Footer
          todoList={todoList}
          allItemsChecked={allItemsChecked}
          clearAll={clearAll}
        />
      </div>
    </div>
  )
}

export default App
