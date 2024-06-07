import React from 'react'
import { useUserStore } from '../../../lib/userStore'

const Userinfo = () => {
  const {currentUser} = useUserStore()
  return (
    <div className='p-5 flex items-center justify-between'>
        <div className='flex items-center gap-5 '>
            <img className='rounded-full w-14 h-14 object-cover' src={currentUser.avatar || './avatar.png'} alt="" />
            <h2>{currentUser.username}</h2>
        </div>
        <div className='flex gap-5'>
            <img className='w-5 h-5 cursor-pointer' src="/more.png" alt="" />
            <img className='w-5 h-5 cursor-pointer' src="/video.png" alt="" />
            <img className='w-5 h-5 cursor-pointer' src="/edit.png" alt="" />
        </div>
    </div>
  )
}

export default Userinfo