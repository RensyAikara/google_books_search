import React, { Component } from "react";
import API from "../../utils/API";

function SavedBooks (props) {
  return(
    <div>
    {props.books.map(book => {
        return (
          <div className="card" key={book._id}>
            <h1>{book.title}</h1>
          </div>
        );
      })}
      </div>
  )
}
// class SavedBooks extends Component {

//     state = {
//         savedBooks: [],
//     }

//     componentDidMount() {
//         API.getallBooks()
//             .then(savedBooks => this.setState({ savedBooks: savedBooks }))
//             .catch(err => console.error(err));
//     }

// render(){
//     return (
//         // <h1>Hello</h1>
//         <div>
//         {this.state.savedBooks.map(book => {
//             return (
//               <div className="card" key={book._id}>
//                 <h1>{book.title}</h1>
//               </div>
//             );
//           })}
//           </div>
//     )
// }
// }

export default SavedBooks;