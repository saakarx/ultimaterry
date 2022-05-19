import { useSearchParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <>
      <SearchBar />
    </>
  )
}

export default Search
