import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react'
import { updateUser } from './Slice'

export const Update = () => {

            const {id} = useParams ();
            const users = useSelector ((state)=> state.users);
            const existingUser = users.filter( f => f.id == id);
            const {name, email} = existingUser[0];
            const [uname, setName] = useState(name)
            const [uemail, setEmail] = useState(email)
            const dispatch = useDispatch();
            const navigate = useNavigate();


        const handleUpdate  = event =>{
            event.preventDefault();
            dispatch(updateUser({
                id: id,
                name: uname,
                email: uemail
            }))
            navigate('/')
        }


  return (
    <div>
        
<div className="container mx-auto p-4 flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4">Update User</h2>
        <form className="space-y-4" onSubmit={handleUpdate}>
          <div>
            <input
              type="text"
              name="name"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Name" 
              value={uname} onChange={e => setName(e.target.value)}    
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Email"
              value={uemail} onChange={e => setEmail(e.target.value)}  
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
