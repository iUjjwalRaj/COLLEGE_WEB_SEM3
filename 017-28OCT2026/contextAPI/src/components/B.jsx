import C from './C'

function B({name, age}) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Component B</h1>
      <p>This is Component B.</p>
      <C name={name} age={age} />

    </div>
  )
}

export default B