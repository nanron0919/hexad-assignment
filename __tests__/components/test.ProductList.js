/* Test `ProductList` */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ProductList from '../../source/js/components/Global/ProductList';

const items = [{
    itemId: 'abc-0',
    name: 'abc',
    imgUrl: 'http://fake-url',
    artist: 'New Singer',
    category: 'Single',
    price: 10,
    stars: 0
},{
    itemId: 'abc-1',
    name: 'abc',
    imgUrl: 'http://fake-url',
    artist: 'New Singer',
    category: 'Single',
    price: 12,
    stars: 1
},{
    itemId: 'abc-2',
    name: 'abc',
    imgUrl: 'http://fake-url',
    artist: 'New Singer',
    category: 'Single',
    price: 20,
    stars: 3
}];

describe('<ProductList />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<ProductList items={ items } />);
            const component = wrapper.find('.product-list');

            expect(component.find('li').length).toEqual(items.length);
            expect(toJson(component)).toMatchSnapshot();
        });
    });
});
