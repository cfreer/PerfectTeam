import { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

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
  const [searchString, setSearchString] = useState('');
  const data : Player[] = props.data;

  const items : Item[] = data.map((obj : Player) => ({
    id: parseInt(obj.id),
    name: (obj.Player).substring(0, obj.Player.indexOf('\\'))
  }));

  const handleOnSearch = (string : string, results : Item[]) => {
    console.log(string, results);
    setSearchString(string);
    props.setInput(string);
  };

  const handleOnClear = () => {
    console.log('Cleared');
    setSearchString('');
    props.setInput('');
  };

  const handleOnSelect = (result : Item) => {
    setSearchString(result.name);
    props.setInput(result.name);
  }

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
      />
    </div>
  );
}

export default SearchBar;
