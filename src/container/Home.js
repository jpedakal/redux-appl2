import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { latestNews } from '../action';

class Home extends Component {
    componentDidMount() {
        this.props.latestNews()
    }
    render() {
        return (
            <Fragment>
                <h1>Home</h1>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        details: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ latestNews }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
