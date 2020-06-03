import axios from "axios";

export default {
    getBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },
    getallBooks: function() {
        return axios.get("/api/books");
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    getSavedBooks: function() {
        return axios.get('/api/books');
    },
    savenewBook: function(bookData) {
        return axios.post('/api/books/', bookData);
    }
};