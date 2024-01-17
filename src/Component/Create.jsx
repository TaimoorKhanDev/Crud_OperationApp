import React from 'react'
import { useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { addUser } from './Slice'
import {useNavigate} from 'react-router-dom'

export const Create = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch('');
    const users = useSelector ((state)=> state.users);
    const navigate = useNavigate()


    const handleSubmit= (event)=> {
        event.preventDefault();
        dispatch(addUser({id: users[users.length -1].id +1 ,name,email}));
        navigate('/')
    }

  return (
    <div>

<div className="container mx-auto p-4 flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4">Add New User</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Name"
              onChange={e=> setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Email"
              onChange={e=> setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    </div>
  )
}
