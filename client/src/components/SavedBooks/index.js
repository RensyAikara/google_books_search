import React, { Component } from "react";
import API from "../../utils/API";

function SavedBooks (props) {
  return(
    <div>
    {props.books.map(book => {
        return (
          <div key={book._id} className="card">
            {/* <h1>{book.title}</h1> */}
            <div className="row" >
                        <div className="col-md-2">
                            <img alt={book.title} className="img-fluid" src={book.image} />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <h6>{book.authors}</h6>
                                <p className="card-text">{book.description}</p>
                                <div>
                                <a href={book.link} target="_blank" >View Book Details</a>
                                <button onClick={() => props.removeSavedBook(book)}>Remove Book</button>
                                </div>
                            </div>
                        </div>

                    </div>
          </div>
        );
      })}
      </div>
  )
}

export default SavedBooks;