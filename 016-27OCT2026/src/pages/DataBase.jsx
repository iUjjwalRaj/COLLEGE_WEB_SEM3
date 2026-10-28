import destinations from '../../data/data.js'

function DataBase() {
  return (
    <div className="w-full max-w-5xl">
      <h2 className="mb-6 text-2xl text-slate-800">Travel Destinations</h2>

      <div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <article
            key={destination.id}
            className="group overflow-hidden rounded-lg border border-slate-200 bg-white font-normal shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="p-4">
              <h3 className="text-lg font-bold transition duration-200 group-hover:text-blue-700">
                {destination.name}
              </h3>
              <p className="text-sm text-slate-500">{destination.country}</p>
              <p className="mt-2 text-sm text-slate-700">{destination.description}</p>
              <p className="mt-3 text-sm">
                <strong>Category:</strong> {destination.category}
              </p>
              <p className="text-sm">
                <strong>Rating:</strong> {destination.rating}
              </p>
              <p className="text-sm">
                <strong>Budget:</strong> ₹{destination.budget}
              </p>
              <p className="text-sm">
                <strong>Duration:</strong> {destination.duration}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default DataBase