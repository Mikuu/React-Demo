import React from 'react';
import {connect} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as Actions from "../../reduxComponents/Actions";
import icons from "../../assets";

const ShoppingCartModal = (props) => {

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.onToggle}>
                <ModalHeader toggle={props.onToggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.onToggle}>Do Something</Button>
                    <Button color="secondary" onClick={props.onToggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        modal: state.shoppingCart.modal
    };
}

function mapDispatchToProps(dispatch) {

    return {
        onToggle: () => {
            dispatch(Actions.toggleShoppingCartModal());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartModal);