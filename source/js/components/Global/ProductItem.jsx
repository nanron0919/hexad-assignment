import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';

export default class ProductItem extends Component {
    static propTypes = {
        item: PropTypes.object,
    }

    render() {
        const { itemId, name, imgUrl, artist, category, price, stars } = this.props.item;

        return (
            <div className='product-item'>
                <h3 className='product-name'>{ name }</h3>
                <img
                    className='product-img'
                    src={ imgUrl }
                    alt={ name }
                />
                <h4 className='artist'>{ artist }</h4>
                <p className='category'>{ category }</p>
                <p className='price'>${ price }</p>
                <Stars itemId={ itemId } score={ stars }/>
            </div>
        );
    }
}