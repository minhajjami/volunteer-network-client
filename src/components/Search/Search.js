import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Search.css'

const Search = () => {
    return (
        // <div className="container text-center">
        //     <h1 >I GROW BY HELPING PEOPLE IN NEED.</h1>
        //     <InputGroup className="mb-3 search-container">
        //         <FormControl
        //             placeholder="Search..."
        //             aria-label="Recipient's username"
        //             aria-describedby="basic-addon2"
        //         />
        //         <InputGroup.Append>
        //             <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
        //         </InputGroup.Append>
        //     </InputGroup>
        // </div>
        <div className="text-center m-5">
            <h2 className="m-3">I GROW BY HELPING PEOPLE IN NEED.</h2>
            <div className="search">
                <input type="text" placeholder="Search..." />
                <button className="btn">Search</button>
            </div>
        </div>
    );
};

export default Search;