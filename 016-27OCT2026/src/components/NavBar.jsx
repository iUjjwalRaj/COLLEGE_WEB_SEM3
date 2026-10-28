import { Link } from 'react-router-dom'
import {
  FaCartShopping,
  FaChevronDown,
  FaLocationDot,
  FaMagnifyingGlass,
  FaPlane,
  FaUser,
} from 'react-icons/fa6'

function NavBar() {
  return (
    <nav className="bg-white px-4 py-3 text-gray-800 shadow-sm">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <Link
            to="/"
            className="rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-blue-800 transition duration-200 hover:bg-yellow-300 hover:shadow-md"
          >
            <span className="text-xl">✦</span> FlyAway
          </Link>
          <Link
            to="/database"
            className="rounded-lg bg-blue-50 px-6 py-3 text-sm text-blue-800 transition duration-200 hover:bg-blue-100 hover:shadow-md"
          >
            <FaPlane className="mr-2 inline text-blue-600" /> Travel
          </Link>
          <span className="ml-auto text-sm">
            <FaLocationDot className="mr-1 inline text-gray-700" /> Location not set{' '}
            <button
              type="button"
              className="font-semibold text-blue-600 transition duration-200 hover:text-blue-800 hover:underline"
            >
              Select Location
            </button>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-1">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full rounded-l-lg border-2 border-blue-400 px-4 py-2 text-sm outline-none"
          />
          <button
            className="rounded-r-lg bg-blue-600 px-4 text-white transition duration-200 hover:bg-blue-700"
            type="button"
          >
            <FaMagnifyingGlass />
          </button>
          </div>

          <button
            type="button"
            className="rounded px-2 py-2 text-sm transition duration-200 hover:bg-blue-50 hover:text-blue-700"
          >
            <FaUser className="mr-1 inline" /> Login <FaChevronDown className="ml-1 inline text-xs" />
          </button>

          <button
            type="button"
            className="rounded px-2 py-2 text-sm transition duration-200 hover:bg-blue-50 hover:text-blue-700"
          >
            More <FaChevronDown className="ml-1 inline text-xs" />
          </button>

          <Link
            to="/database"
            className="rounded px-2 py-2 text-sm transition duration-200 hover:bg-blue-50 hover:text-blue-700"
          >
            <FaCartShopping className="mr-1 inline" /> Cart
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar