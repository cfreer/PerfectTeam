import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

type Item = {
  id: number;
  name: string;
}

type Player = {
  id: string,
  Rk: number,
  Player: string,
  age: number,
  WS: string,
  salary: string,
  projSalary: string,
  playerTeam: string,
}

function SearchBar(props : any) {
  const [searchString, setSearchString] = useState("");
  const data : Player[] = props.data;

  const items : Item[] = data.map((obj : Player) => ({
    id: parseInt(obj.id),
    name: (obj.Player).substring(0, obj.Player.indexOf('\\'))
  }));

  const handleOnSearch = (string : string, results : unknown[]) => {
    console.log(string, results);
    setSearchString(string);
  };

  const handleOnClear = () => {
    console.log("Cleared");
    setSearchString("");
  };

  const clearSearchBox = () => {
    setSearchString("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={clearSearchBox}>Clear input!</button>
        <div style={{ width: 200, margin: 20 }}>
          <div style={{ marginBottom: 20 }}>Try to type "JavaScript"</div>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onClear={handleOnClear}
            inputSearchString={searchString}
            autoFocus
          />
          <div style={{ marginTop: 20 }}>This text will be covered!</div>
        </div>
      </header>
    </div>
  );
}

export default SearchBar;
