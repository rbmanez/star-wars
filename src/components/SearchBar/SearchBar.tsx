function SearchBar({ handleTextInputChange }: {handleTextInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void}){
    return(
        <div id="search-container">
            <input data-testid="searchbar" type="text" placeholder="search for character name" onChange={handleTextInputChange}/>
        </div>
    )
}

export default SearchBar