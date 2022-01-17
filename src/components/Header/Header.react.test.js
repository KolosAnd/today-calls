import React from 'react';
import renderer from 'react-test-renderer';
import Header from "./Header.js";

describe('Header component', () => {
    test('Header without props', () => {
        const component = renderer.create(<Header/>,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

})