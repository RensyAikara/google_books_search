import React, { Component } from "react";
import API from "../../utils/API";
import SavedBooks from "../../components/SavedBooks";

class Saved extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.getallBooks()
        .then(savedBooks => this.setState({ savedBooks: savedBooks }))
        .catch(err => console.log(err)
        );
    }

    render() {
        return(
            <div className="container" >
                <h2>Saved Books</h2>
                <SavedBooks books={this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;