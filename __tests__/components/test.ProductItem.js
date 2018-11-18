/* Test `ProductItem` */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ProductItem from '../../source/js/components/Global/ProductItem';

describe('<ProductItem />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<ProductItem
                item={{
                    itemId: 'abc',
                    name: 'abc',
                    imgUrl: 'http://fake-url',
                    artist: 'New Singer',
                    category: 'Single',
                    price: 10,
                    stars: 0
                }} />);
            const component = wrapper.find('.product-item');

            expect(toJson(component)).toMatchSnapshot();
        });
    });
});
