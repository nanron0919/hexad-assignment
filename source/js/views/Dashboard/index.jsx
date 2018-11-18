import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems } from 'actions/app';
import ProductList from 'components/Global/ProductList';

@connect(state => ({
    items: state.app.get('items'),
}))
export default class Dashboard extends Component {
    static propTypes = {
        items: PropTypes.array,
        // from react-redux connect
        dispatch: PropTypes.func,
    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(fetchItems());
    }

    render() {
        const {
            items,
        } = this.props;

        return (
            <div className='dashboard'>
                <ProductList items={ items.toJS() } />
            </div>
        );
    }
}
