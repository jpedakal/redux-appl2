import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { latestNews } from '../action';
import LatestDisplay from '../component/Home/LatestDisplay';

class Home extends Component {
    componentDidMount() {
        this.props.latestNews()
    }
    render() {
        return (
            <Fragment>
                <LatestDisplay />
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        datalist: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ latestNews }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
