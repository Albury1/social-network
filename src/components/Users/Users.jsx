import React from 'react'
import styles from './users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users",
            {token: '01ad3fc6-97b8-419a-886f-0dd4110e56de'},
            {withCredentials: true})
            .then(response =>{
            props.setUsers(response.data.items)
        })
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                       <img src={userPhoto}
                            className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Delete friend</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Add friend</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users