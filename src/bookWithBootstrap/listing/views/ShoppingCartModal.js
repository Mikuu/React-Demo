import React from 'react';
import {connect} from 'react-redux';
import { Button, Modal, Badge, ModalHeader, ModalBody, ModalFooter, Container, Row, Col, Table, Input } from 'reactstrap';
import * as Actions from "../../reduxComponents/Actions";
import icons from "../../assets";

const ShoppingCartModal = (props) => {

    const styleModifier = {
        paddingTop: "30px"
    };

    const TableBookListItems = props.cartBooks.books.map((book) => {
        console.log('FBI --> in mapping: '+book.bookTitle);

        return (
            <tr>
                <td><img width={'44px'} height={'60px'} src={book.bookImage}/></td>
                <td style={styleModifier}>{book.bookTitle}</td>
                <td style={styleModifier}>
                    <a data-book={JSON.stringify(book)} onClick={props.onDelete} style={{color:'cornflowerblue'}}>delete</a>
                </td>
                <td style={styleModifier}>{book.bookPrice}</td>
            </tr>
        );
    });

    const TableBookList = () => {
        return (
            <div>
                <Table hover>
                    <tbody>
                    {TableBookListItems}
                    </tbody>
                </Table>
            </div>
        );
    };

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.onToggle}>
                <ModalHeader toggle={props.onToggle}>Shopping Cart</ModalHeader>
                <ModalBody>
                    {TableBookList()}
                </ModalBody>
                <ModalFooter>
                    <h4>
                        <span>Total Price: </span>
                        <Badge color="primary">
                            <span>{props.cartBooks.totalPrice}</span>
                        </Badge>
                    </h4>
                </ModalFooter>
            </Modal>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        modal: state.shoppingCart.modal,
        cartBooks: {
            books: state.shoppingCart.books,
            totalPrice: state.shoppingCart.totalPrice
        }
    };
}

function mapDispatchToProps(dispatch) {

    return {
        onToggle: () => {
            dispatch(Actions.toggleShoppingCartModal());
        },
        onDelete: (e) => {
            dispatch(Actions.shoppingCartDeleteBook(JSON.parse(e.target.getAttribute('data-book'))));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartModal);