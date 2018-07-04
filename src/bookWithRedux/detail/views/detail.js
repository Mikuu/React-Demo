import React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../reduxComponents/Actions';

class BookDetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.props.getBook();
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

        if (this.props.book == null) {
            return (
                <div>
                    <p>loading ...</p>
                </div>
            );
        }

        return (
            <div style={styleDetailContainer}>
                <div style={styleDetailImage}>
                    <img src={this.props.book.image} width={'220px'} height={'300px'}/>
                </div>

                <div style={styleDetailInformation}>
                    <div>
                        <b>Title: </b>
                        <span>{this.props.book.title}</span>
                    </div>
                    <div>
                        <b>Price: </b>
                        <span>{this.props.book.price}</span>
                    </div>
                    <div>
                        <b>Publisher: </b>
                        <span>{this.props.book.publisher}</span>
                    </div>
                    <div>
                        <b>Author: </b>
                        <span>{this.props.book.author}</span>
                    </div>
                    <div>
                        <b>Summary: </b>
                        <span>{this.props.book.summary}</span>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {book: state.book}
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        getBook: () => {dispatch(Action.fetchBook(ownProps));}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailComponent);