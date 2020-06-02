import React, {Component} from "react";
import API from "../../utils/API";


function SearchResults(props){
    return (
        <div>
            {props.books.map(book => (
                <div  key={book._id} className="card" >   
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
                            <a href={book.link} target="_blank" >Buy Book</a>
                            <button onClick={() => props.handleSaveBook(book)}>Save</button>
                            </div>
                        </div>
                    </div>

                </div>
                </div> 
            ))}
        </div>
    )
}

// class SearchResults extends Component {

//     state = {
//         savedBooks: []
//     }

//     // componentDidMount() {
//     //     API.allSavedBooks()
//     //         .then(savedBooks => this.setState({ savedBooks: savedBooks }))
//     //         .catch(err => console.error(err));
//     // }

//     savedBookList = book => {
//         API.saveBook(book)
//         .then(result => this.setState({savedBooks: this.state.savedBooks.concat([result])})
//         )
//         .catch(err => console.log(err)
//         );
//     }


// render() {
//     return (
//         <div>
//             {this.props.books.map(book => (
//                 <div  key={book._id} className="card" >   
//                 <div className="row" >
//                     <div className="col-md-2">
//                         <img alt={book.title} className="img-fluid" src={book.image} />
//                     </div>
//                     <div className="col-md-10">
//                         <div className="card-body">
//                             <h5 className="card-title">{book.title}</h5>
//                             <h6>{book.authors}</h6>
//                             <p className="card-text">{book.description}</p>
//                             <div>
//                             <a href={book.link} target="_blank" >Buy Book</a>
//                             <button onClick={() => this.savedBookList(book)}>Save</button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 </div> 
//             ))}
//         </div>
//     )
// }
  
// }

export default SearchResults;