import React from 'react';
import renderer from 'react-test-renderer';
import {CallsList} from "./CallsList";

test('CallsList default', () => {
    const component = renderer.create(<CallsList/>,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});