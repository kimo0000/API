import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUSer, setlistOfUSer] = useState([]);
    
    
    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setlistOfUSer(response.data)
        })
        
    }, []);


    const ListeUser = listOfUSer.map((user, index) => 
                                          <ul className="list-group mb-4" key={index} >
                                               <li className='list-group-item h3'>USER: {user.id} </li>
                                               <li className='list-group-item'><strong>NAME: </strong> {user.name}</li>
                                               <li className='list-group-item'><strong>USERNAME: </strong> {user.username}</li>
                                               <li className='list-group-item'><strong>EMAIL: </strong> {user.email}</li>
                                               <li className='list-group-item'><strong>WEBSITE: </strong> {user.website}</li>
                                          </ul>
                                     )


return (
       <div>
           {ListeUser}
       </div>
  )
}

export default UserList;