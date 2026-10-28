import { useContext } from 'react'
import { tsundere } from '../context'

function D({name, age}) {
    const { cutie, cutieAge } = useContext(tsundere);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Component D</h1>
      <p>This is Component D.</p>
        <h1> Best Girl is {name}</h1>
        <h1>She is {age} years old.</h1>
        <h1> Genshin's new cutie is {cutie} and she's a god</h1>
        <h1>She is {cutieAge} years old.</h1>
    </div>
  )
}

export default D