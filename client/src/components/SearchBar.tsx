// This file contains the autofill search bar component that
// accepts user input and returns reccomended results

import { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

// The player information
type Item = {
  id: number;
  name: string;
}

// The entire player stats
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
  const [searchString, setSearchString] = useState('');
  const data : Player[] = props.data;

  // Sets up the item object
  const items : Item[] = data.map((obj : Player) => ({
    id: parseInt(obj.id),
    name: obj.Player
  }));

  // Handle the instance in which the player is selected
  const handleOnSearch = (string : string, results : Item[]) => {
    console.log(string, results);
    setSearchString(string);
    props.setInput(string);
  };

  // Handles the instance in which the searchbar is cleared
  const handleOnClear = () => {
    console.log('Cleared');
    setSearchString('');
    props.setInput('');
  };

  // Handles the selected player
  const handleOnSelect = (result : Item) => {
    setSearchString(result.name);
    props.setInput(result.name);
  }

  useEffect( () => {
    if (props.value === '') {
      setSearchString('');
    }
  }, [props.value]);

  return (
    <div>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        onClear={handleOnClear}
        onSelect={handleOnSelect}
        inputSearchString={searchString}
        inputDebounce={0}
        autoFocus
        styling={{height: '38px'}}
      />
    </div>
  );
}

export default SearchBar;
