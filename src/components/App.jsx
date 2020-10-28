import React from 'react'
import {Emoji} from './emoji'
import {emojipedia} from './emojis'

const emojiinsert =(emoji)=>{
    return <Emoji 
        name={emoji.name}
        meaning={emoji.meaning}
        emoji={emoji.emoji}
    />
}

const App =(props)=>{
    return <div>
        <h1 className="emojihead">Emojipedia</h1>
        <div className="emojis">
            {emojipedia.map(emojiinsert)}
        </div>
    </div>
}

export {App}