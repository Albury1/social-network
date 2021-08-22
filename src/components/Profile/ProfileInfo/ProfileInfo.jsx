import React from 'react';
import s from './ProfileInfo.module.css';
import MyPosts from '../MyPosts/MyPosts.jsx'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    className={s.image}
                    src='https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/16/07/160773_v8.jpeg'/>
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;