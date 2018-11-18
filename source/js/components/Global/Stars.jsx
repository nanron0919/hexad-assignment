import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { rateItem } from 'actions/app';

@connect(state => ({}))
export default class Stars extends Component {
    static propTypes = {
        itemId: PropTypes.string,
        score: PropTypes.number,
        dispatch: PropTypes.func,
    }

    handleStarClick = e => {
        const { itemId, dispatch } = this.props;
        const el = e.target;

        dispatch(rateItem(itemId, Number(el.value)));
    }

    renderStars() {
        const { itemId, score } = this.props;
        const max = 5;
        const list = [];

        for (let i = 0; i < max; i++) {
            const starIndex = i + 1;
            const cbx = <input
                name={ `star-${ itemId }` }
                type='radio'
                onClick={ this.handleStarClick }
                defaultValue={ starIndex }
                defaultChecked={ starIndex === score }
            />;
            const className = (i < score ? 'fas' : 'far');

            list.push(
                <label
                    key={ `star-${ itemId }-${ i }`}
                    className={`${ className } fa-star` }
                >
                    { cbx }
                </label>
            );
        };

        return list;
    }

    render() {
        return (
            <div className='star-list'>
                { this.renderStars() }
            </div>
        );
    }
}