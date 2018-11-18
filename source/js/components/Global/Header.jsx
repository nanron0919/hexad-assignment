import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startRandomSortItems, stopRandomSortItems } from 'actions/app';

@connect(state => ({
    items: state.app.get('items'),
}))
export default class Header extends Component {
    static propTypes = {
        items: PropTypes.array,
        dispatch: PropTypes.object,
    }

    constructor(props) {
        super(props);

        this.state = {
            startRandomRating: false,
        };
    }

    handleSort = () => {
        const { dispatch, items } = this.props;
        const { startRandomRating } = this.state;

        if (!startRandomRating) {
            dispatch(startRandomSortItems(items));
        }
        else {
            dispatch(stopRandomSortItems());
        }

        this.setState({
            startRandomRating: !startRandomRating,
        });
    }

    render() {
        const { startRandomRating } = this.state;
        const spinner = (
            startRandomRating ?
            <span className='fas fa-spinner fa-spin' /> :
            ''
        );
        const randomButtonText = (
            startRandomRating ?'STOP' : 'RANDOM RATING'
        );

        return (
            <header className='main-header'>
                <button className='btn btn-primary' onClick={ this.handleSort }>
                    { spinner }
                    { randomButtonText }
                </button>
            </header>
        );
    }
}