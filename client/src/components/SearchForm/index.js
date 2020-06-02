import React from "react";

function SearchForm(props){
    return (
      
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="search">Book Name:</label>
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="search"
              type="text"
              className="form-control"
              placeholder="Type in a book name"
              id="search"
            />
            <br></br>
            <button onClick={props.handleFormSubmit} className="btn btn-success">
              Search
            </button>
          </div>
        </form>
        </div>
      );
}

export default SearchForm;