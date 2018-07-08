import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink, Link, Switch, Route } from "react-router-dom";
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";

function Banner(props) {

    const breadcrumbs = () => (
        <Breadcrumbs
            separator={<b> / </b>}
            item={NavLink}
            finalItem={"b"}
            finalProps={{
                style: {color: "red"}
            }}
        />
    );

    return (breadcrumbs);
}

function mapStateToProps(state) {
    return {
        books: state.books,
    }
}

export default withRouter(connect(mapStateToProps)(Banner));