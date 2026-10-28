import { useState } from 'react'

function LikeDislike() {
  const [text, setText] = useState('like')
  const [emoji, setEmoji] = useState('💖')

  const handleClick = () => {
    if (text === 'like') {
      setText('dislike')
      setEmoji('😭')
    } else {
      setText('like')
      setEmoji('💖')
    }
  }

  return (
    <div className="like-dislike">
      <h2>{text}</h2>
      <button onClick={handleClick}>{emoji}</button>
    </div>
  )
}

export default LikeDislike