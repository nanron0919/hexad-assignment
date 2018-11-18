import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'components/Global/ProductItem';

export default class ProductList extends Component {
    static propTypes = {
        items: PropTypes.array,
    }

    renderListItems() {
        const { items } = this.props;

        return items.map(item => {
            const { itemId } = item;

            return (
                <li key={ itemId }>
                    <ProductItem item={ item } />
                </li>
            );
        });
    }

    render() {
        const listItems = this.renderListItems();

        return (
            <ul className='product-list'>
                { listItems }
            </ul>
        );
    }
}