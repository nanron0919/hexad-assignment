import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Global/Header';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.object,
    }

    render() {
        const { children } = this.props;

        return (
            <div className='app'>
                <Header />

                <div className='page'>
                    { children }
                </div>
            </div>
        );
    }
}