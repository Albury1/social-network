import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://image.flaticon.com/icons/png/512/147/147144.png'/>
            {props.message}
            <div>
                {props.likesCount} <span>likes</span>
            </div>
        </div>
    )
}

export default Post