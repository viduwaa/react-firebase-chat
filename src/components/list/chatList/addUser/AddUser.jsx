import React from 'react'

const AddUser = () => {
  return (
    <div className='shadow-[0px_0px_20px_2px_#1a202c] border h-80 bg-blue-300 rounded-lg p-2 flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <form className='p-2 flex gap-2'>
            <input className='p-1 rounded-md' type="text" placeholder='Username' name='username'/>
            <button className='p-1 bg-blue-500 rounded-lg'>Search</button>
        </form>
        <div className="flex w-full items-center border-b p-2">
            <div className="flex flex-1 gap-3 items-center">
                <img className='rounded-full w-10 h-10' src="./avatar.png" alt="" />
                <span>John Doe</span>
            </div>
            <button className='text-sm p-2 bg-blue-800 rounded-lg'>Add User</button>
        </div>
        <div className="flex w-full items-center border-b p-2">
            <div className="flex flex-1 gap-3 items-center">
                <img className='rounded-full w-10 h-10' src="./avatar.png" alt="" />
                <span>John Doe</span>
            </div>
            <button className='text-sm p-2 bg-blue-800 rounded-lg'>Add User</button>
        </div>
    </div>
  )
}

export default AddUser