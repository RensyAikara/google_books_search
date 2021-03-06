import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Container from "../../components/Container";
import { Redirect } from 'react-router-dom';

class Search extends Component {
    state = {
        search: "",
        books: [],
        error: "",
        redirectTo: null
    };

    bookSearch = query =>{
        console.log(query);
        
        API.getBooks(query)
            .then(res =>
                this.setState({books: res.data.items.map(bookDetails => this.bookList(bookDetails))}))
                .catch(err => console.error(err));
    };


    bookList= bookDetails =>{
        return {
            _id: bookDetails.id,
            title: bookDetails.volumeInfo.title,
            authors: bookDetails.volumeInfo.authors,
            description: bookDetails.volumeInfo.description,
            image: bookDetails.volumeInfo.imageLinks.thumbnail,
            link:bookDetails.volumeInfo.previewLink
        }
    }

    handleInputChange = event => {
        console.log(event)
        this.setState({search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.bookSearch(this.state.search);
    };

    handleSaveBook = (bookdata) => {
        // event.preventDefault();
        console.log(bookdata);
        API.savenewBook(bookdata).then(success => {
            console.log(success);
            // window.location.reload();
            this.setState({
                redirectTo: '/saved'
            })
        })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <h1 className="text-center">Search Book </h1>
                    <SearchForm
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        search={this.state.search}
                    />
                    <h2>Results</h2>
                    <SearchResults books={this.state.books} handleSaveBook={this.handleSaveBook} />
                </Container>
            </div>
        )
        }
    }

}

export default Search;