import D from './D'
import { useContext } from 'react'
import { angryDevesh } from '../context'

function C({name, age}) {
    const isHungry = false;
    const isAngry = true;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Component C</h1>
      <p>This is Component C.</p>
        <D name={name} age={age} />
        <angryDevesh.Consumer>
          {({ isHungry, isAngry, lunch }) => (
            <div>
              <h1>Is Devesh Hungry? {isHungry ? 'Yes' : 'No'}</h1>
              <h1>Is Devesh Angry? {isAngry ? 'Yes' : 'No'}</h1>
              <h1>Why is Devesh Angry? {lunch}</h1>
            </div>
          )}
        </angryDevesh.Consumer>
    </div>
  )
}

export default C