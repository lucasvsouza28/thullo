import * as SC from './search.styles';

const Search = () => {
  return (
    <SC.Container>
      <input
        placeholder="Keyword..."
      />
      <SC.SearchButton>
        Search
      </SC.SearchButton>
    </SC.Container>
  )
}

export default Search
