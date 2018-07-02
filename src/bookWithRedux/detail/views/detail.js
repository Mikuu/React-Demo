import React from 'react';

class BookDetailComponent extends React.Component {
    constructor(props) {
        console.log('FBI --> constructor');

        super(props);
        this._getBook = this._getBook.bind(this);

        this.state = {book:null};
    }

    componentDidMount() {
        this._getBook();
        console.log('FBI --> didMount: '+this.state.book);
    }

    _getBook() {
        const apiUrl = 'http://localhost:3000/v2/book/'+this.props.match.params.bookId;
        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                this.setState({book: responseJson});
            }).catch((error) => {
                throw new Error('Failed to get response, reason: '+error.toString());
            });
        }).catch((error) => {
            throw new Error('Failed to fetch request, reason: '+error.toString());
        });
    }

    render() {
        const styleDetailContainer = {
            maxWidth: '800px',
            margin: '0 auto',
            marginTop: '50px',
        };

        const styleDetailImage = {
            width: '250px',
            height: '1200px',
            float: 'left',
        };
        const styleDetailInformation = {
            marginLeft: '20px',
    };

        if (this.state.book == null) {
            return (
                <div>
                    <p>loading ...</p>
                </div>
            );
        }

        return (
            <div style={styleDetailContainer}>
                <div style={styleDetailImage}>
                    <img src={this.state.book.image} width={'220px'} height={'300px'}/>
                </div>

                <div style={styleDetailInformation}>
                    <div>
                        <b>Title: </b>
                        <span>{this.state.book.title}</span>
                    </div>
                    <div>
                        <b>Price: </b>
                        <span>{this.state.book.price}</span>
                    </div>
                    <div>
                        <b>Publisher: </b>
                        <span>{this.state.book.publisher}</span>
                    </div>
                    <div>
                        <b>Author: </b>
                        <span>{this.state.book.author}</span>
                    </div>
                    <div>
                        <b>Summary: </b>
                        <span>{this.state.book.summary}</span>
                    </div>
                </div>



            </div>
        );
    }

}

export default BookDetailComponent;