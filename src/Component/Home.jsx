import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { deleteUser } from './Slice';

function Home ()  {

        const users = useSelector ((state)=> state.users);
        const dispatch = useDispatch();
          
          const handleDelete = (id) => {
           dispatch (deleteUser({id: id}));
          }

  return (
    <div className='container mx-auto p-4'>
    <h2 className='text-3xl font-bold mb-4'>Crud Operation</h2>
    <Link to='/create' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'>Create +</Link>
    <div className='overflow-x-auto'>
      <table className='w-full mt-4 bg-white border border-gray-300'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b'>ID</th>
            <th className='py-2 px-4 border-b'>Name</th>
            <th className='py-2 px-4 border-b'>Email</th>
            <th className='py-2 px-4 border-b'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className='py-2 px-4 border-b text-center'>{user.id}</td>
              <td className='py-2 px-4 border-b text-center'>{user.name}</td>
              <td className='py-2 px-4 border-b text-center'>{user.email}</td>
              <td className='py-2 px-4 border-b text-center'>
                <Link to={`/edit/${user.id}`} className='bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-700'>Edit</Link>
                <button onClick={() => handleDelete(user.id)} className='bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 ml-2'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default  Home;
