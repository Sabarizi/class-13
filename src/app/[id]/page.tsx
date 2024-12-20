import React from 'react'

const DynamicBook = (props:any) => {
  return (
    <div>
        <h1 className='text-4xl text-blue-500'>{props.params.id}</h1>
        <h1 className='text-6xl text-center text-purple-600'>Welcome in my dynamic Page</h1>
    </div>
  )
}

export default DynamicBook