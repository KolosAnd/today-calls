import React from 'react';
import renderer from 'react-test-renderer';
import {Title} from "./Title.js";

describe('Title component', () => {
    test('Title without props', () => {
        const component = renderer.create(<Title/>,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Title with test props', () => {
        const component = renderer.create(<Title classes={""} text={"Next call"}/>,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})