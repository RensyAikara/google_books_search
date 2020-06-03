import React, { Component } from "react";
import API from "../../utils/API";
import SavedBooks from "../../components/SavedBooks";
import SearchResults from "../../components/SearchResults";

class Saved extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.getallBooks()
        .then(savedBooks => {
            console.log(savedBooks.data)
            this.setState({ savedBooks: savedBooks.data})
        })
        .catch(err => console.log(err)
        );
    }

    removeSavedBook =(book) => {
        console.log(book);
        API.deleteBook(book._id).then(success => {
            console.log("removed");
            window.location.reload();
        })
        
    }


    render() {
        return(
            <div className="container" >
                <h2>Saved Books</h2>
                {this.state.savedBooks.length ? ( <SavedBooks books={this.state.savedBooks} removeSavedBook={this.removeSavedBook} />) : (<h2>No books to display</h2>)}
            </div>
        )
    }
}

export default Saved;