import React from 'react'
import Userinfo from './userinfo/Userinfo'
import ChatList from './chatList/ChatList'

const List = () => {
  return (
    <div className='flex flex-col flex-1 max-w-[25vw] border-r border-r-slate-100 pr-2'>
        <Userinfo />
        <ChatList />
    </div>
  )
}

export default List