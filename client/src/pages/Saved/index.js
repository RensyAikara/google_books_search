import React, { Component } from "react";
import API from "../../utils/API";
import SavedBooks from "../../components/SavedBooks";

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

    render() {
        return(
            <div className="container" >
                <h2>Saved Books</h2>
                {this.state.savedBooks.length ? ( <SavedBooks books={this.state.savedBooks} />) : (<h2>No books to display</h2>)}
                {/* <SavedBooks books={this.state.savedBooks} /> */}
            </div>
        )
    }
}

export default Saved;