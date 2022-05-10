import React, { useState } from 'react'
import './App.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

interface Player {
    id: string,
    Rk: number,
    Player: string,
    age: number,
    WS: string,
    salary: string,
    projSalary: string,
    playerTeam: string,
  }

function SearchBar() {


  const[currentInput, setCurrentInput] = useState("");
  const[searchString, setSearchString] = useState("");
  const[suggestions, useSuggestions] = useState();
  const[suggestionsInput, setsuggestionsInput] = useState("");
  const[player, setPlayer] = useState("");
  const [data, setData] = useState<Player[]>([]);

  const API_URL = 'http://localhost:4567/';

  const handleOnSearch = async (string: React.SetStateAction<string>, results: any) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
    setSearchString(string);
    setCurrentInput(string);
    return results
  }

  const handleOnClear = () => {
      setSearchString("");
      setCurrentInput("");
  }

  const handleOnHover = (result: any) => {
    // the item hovered
    console.log(result)
  }

  /*const handleOnSelect = (data: React.SetStateAction<string>) => {
    // the item selected
    console.log(data)
    setPlayer(data);
    setSearchString("");
    setCurrentInput("");
  } */

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item: { id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }

  function getPlayersRequest() {
    fetch(API_URL + 'players')
      .then(statusCheck)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }

  async function statusCheck(res : Response) {
    if (!res.ok) {
      throw new Error(await res.json());
    }
    return res;
  }
  
  getPlayersRequest();

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={data}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            //onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            onClear={handleOnClear}
          />
        </div>
      </header>
    </div>
  )
}

export default SearchBar;