import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Users = () => {
    let [usersData, setUsersData] = useState();
    let getUsers = async () => {
        let data = await fetch("https://api.escuelajs.co/api/v1/users");
        let result = await data.json();
        setUsersData(result);
        console.log(result);

    }
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <>
        <div className='user-div'>
            {
                usersData?.map((user) => {
                    let { avatar, name, id } = user;
                    return (
                        <div key={id} className='image-div' >
                            <img src={avatar} alt={name} className='image-box'></img>
                            <Link >User Details</Link>
                        </div>
                    )
                })
            }
        </div>
            
        </>
    )
}

export default Users