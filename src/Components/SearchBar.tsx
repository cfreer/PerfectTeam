import { Autocomplete } from "@mui/material";
import React from "react";


export default function SearchBar({data, placeholder}) {
    return(
        <div className="search">
<div className="searchInput">
    <Autocomplete 
    id="custom-input-demo" 
    options={data}
    getOptionLabel={(opt) => opt.name} //need a data.json file, will most likely have to call this name. 
    renderInput={(params) => (
        <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} placeholder={placeholder} autoFocus='true' />
        </div>
    )}>

    </Autocomplete>
</div>
        </div>
    )
}