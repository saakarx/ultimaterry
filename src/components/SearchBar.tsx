import { SyntheticEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { ReactComponent as SearchIcon } from '../assets/search.svg'

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const queryParam = searchParams.get('q')
    if (queryParam) {
      setSearchText(queryParam)
    }
  }, [])

  const formSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    setSearchParams({ q: searchText })
  }

  return (
    <form onSubmit={formSubmit}>
      <div className="pl-6 bg-c-white max-w-2xl mx-auto rounded-2xl flex gap-6 items-center shadow-card mb-11">
        <label className="sr-only">Search Images</label>

        <SearchIcon className="stroke-c-black w-6 h-6" />

        <input
          type="text"
          placeholder="Search Images"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          className="bg-transparent w-full outline-none placeholder:text-c-black py-6 pr-6"
        />
      </div>
    </form>
  )
}

export default SearchBar
