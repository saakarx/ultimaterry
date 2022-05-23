import { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as RightArrowIcon } from '../assets/right-arrow.svg'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    },
    [setIsOpen]
  )

  useEffect(() => {
    if (!isOpen) window.addEventListener('keyup', handleKeyDown)
    else window.removeEventListener('keyup', handleKeyDown)

    return () => {
      window.removeEventListener('keyup', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  return (
    <div className="absolute top-3 right-3 z-20 text-c-black">
      <button
        type="button"
        className="flex items-center gap-2 px-5 py-2 bg-c-white outline-none rounded-2xl shadow-card cursor-pointer ml-auto focus:ring-2 ring-c-green-light"
        onClick={() => setIsOpen(prev => !prev)}>
        Navigate to <RightArrowIcon className="stroke-c-black" />
      </button>

      {isOpen ? (
        <div className="flex flex-col bg-c-white rounded-2xl mt-2 py-3 shadow-card overflow-hidden w-48">
          <NavLink
            className={({ isActive }) =>
              `px-4 py-2 border-x-2 hover:border-c-pink transition-all duration-150 ease-in-out outline-none focus:border-c-pink ${
                isActive ? 'border-c-pink' : ''
              }`
            }
            to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `px-4 py-2 border-x-2 hover:border-c-pink transition-all duration-150 ease-in-out outline-none focus:border-c-pink ${
                isActive ? 'border-c-pink' : ''
              }`
            }
            to="/search">
            Search
          </NavLink>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Dropdown
