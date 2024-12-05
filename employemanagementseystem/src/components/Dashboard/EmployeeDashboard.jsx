import React from 'react'
import Header from '../Others/Header'
import TasklistNumbers from '../Others/TasklistNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] h-screen'>
      <Header/>
      <TasklistNumbers/>
      <TaskList/>
 
    </div>
  )
}

export default EmployeeDashboard