import api from 'api';
import {
    ASYNC_START,
    ASYNC_ERROR,
    ASYNC_SUCCESS,
    FETCH_ITEMS,
    RANDOM_SORT_ITEMS,
    RATE_ITEM,
} from './type';
import { Observable } from 'rxjs';

const ob = items => {
    let updatedItems = items;
    const getRandomDelay = () => Math.max(300, parseInt(Math.random() * 1000));
    const getRandomScore = () => parseInt(Math.random() * 5);
    const getRandomIndex = () => parseInt(Math.random() * updatedItems.size);
    const updateItemStars = (index, stars) => updatedItems.setIn([index, 'stars'], stars);

    return Observable.create(observer => {
        let timeout = null;

        // recursively send a random number to the subscriber
        // after a random delay
        const push = () => {
            timeout = setTimeout(() => {
                const index = getRandomIndex();
                const stars = getRandomScore();

                updatedItems = updateItemStars(index, stars);

                observer.next(updatedItems);
                push();
            },

            getRandomDelay());
        };

        push();

        // clear any pending timeout on teardown
        return () => clearTimeout(timeout);
    });
};

let source;

const asyncStart = () => {
    return {
        type: ASYNC_START,
    };
}

const asyncSuccess = () => {
    return {
        type: ASYNC_SUCCESS,
    };
}

const asyncError = error => {
    return {
        type: ASYNC_ERROR,
        error,
    };
}

export const fetchItems = () => dispatch => {
    dispatch(asyncStart());

    return api.fetchItems()
        .then(data => {
            dispatch(asyncSuccess());

            return dispatch({
                type: FETCH_ITEMS,
                data,
            });
        })
        .catch(error => dispatch(asyncError(error)));
};

export const startRandomSortItems = items => dispatch => {
    source = ob(items).subscribe(items => {
        dispatch({
            type: RANDOM_SORT_ITEMS,
            data: items,
        });
    });

    return source;
};

export const stopRandomSortItems = () => dispatch => {
    if (source) {
        source.unsubscribe();
        source = null;
    }

    return dispatch({
        type: RANDOM_SORT_ITEMS,
    });
};

export const rateItem = (itemId, stars) => dispatch => {
    return dispatch({
        type: RATE_ITEM,
        data: {
            itemId, stars
        },
    });
};
