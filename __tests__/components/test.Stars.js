/* Test `Stars` component */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Stars from '../../source/js/components/Global/Stars';

const mockStore = configureStore();
const store = mockStore({});

describe('<Stars />', () => {
    describe('render()', () => {
        test('renders the component with 0 solid star', () => {
            const wrapper = shallow(<Stars itemId={ 'abc' } score={ 0 } store={ store } />);
            const component = wrapper.dive();

            expect(component.find('.far.fa-star').length).toEqual(5);
            expect(toJson(component)).toMatchSnapshot();
        });

        test('will not render more than 5 stars', () => {
            const wrapper = shallow(<Stars itemId={ 'abc' } score={ 6 } store={ store } />);
            const component = wrapper.dive();

            expect(component.find('.fa-star').length).toEqual(5);
            expect(toJson(component)).toMatchSnapshot();
        });


        test('negative score is allowed but not affected', () => {
            const wrapper = shallow(<Stars itemId={ 'abc' } score={ -1 } store={ store } />);
            const component = wrapper.dive();

            expect(component.find('.fa-star').length).toEqual(5);
            expect(toJson(component)).toMatchSnapshot();
        });
    });
});
