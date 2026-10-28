import B from './B'

function A({ name, age }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Component A</h1>
      <p>This is Component A.</p>
        <B name={name} age={age} />
    </div>
  )
}

export default A