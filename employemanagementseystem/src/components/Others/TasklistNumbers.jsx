import React from 'react'

const TasklistNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-6 px-2 bg-blue-600'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-3xl font-semibold'>New Task</h3>
        </div>

        <div className='rounded-xl w-[45%] py-6 px-2 bg-green-600'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-3xl font-semibold'>Completed</h3>
        </div>

        <div className='rounded-xl w-[45%] py-6 px-2 bg-yellow-600'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-3xl font-semibold'>Accepted</h3>
        </div>

        <div className='rounded-xl w-[45%] py-6 px-2 bg-red-600'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-3xl font-semibold'>Failde</h3>
        </div>
    </div>
  )
}

export default TasklistNumbers