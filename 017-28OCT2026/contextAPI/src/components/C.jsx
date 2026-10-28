import D from './D'

function C({name, age}) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Component C</h1>
      <p>This is Component C.</p>
        <D name={name} age={age} />
    </div>
  )
}

export default C