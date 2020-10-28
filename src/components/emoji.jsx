import React from 'react'

const Emoji =(props)=>{
    return <div className="emojicard">
            <h2>{props.emoji}</h2>
            <h3 className="emojiname">{props.name}</h3>
            <p className="emojimeaning">{props.meaning}</p>
        </div>
}

export {Emoji}