import React from 'react';
import renderer from 'react-test-renderer';
import {TableCallItem} from "./TableCallItem.js";

const call = {
    id: 1641294575511,
    milisec: 1641273300511,
    name: "Петя",
    phone: "056-34-45-111",
    time: "07:15"
}

describe('TableCallItem component', () => {

    test('TableCallItem with one props', () => {
        const component = renderer.create(<TableCallItem call={call} />,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('TableCallItem with two props', () => {
        const component = renderer.create(<TableCallItem call={call} hidden={'all'}/>,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('TableCallItem with two props hidden all', () => {
        const component = renderer.create(<TableCallItem call={call} hidden={'all'}/>,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('TableCallItem with two props hidden next', () => {
        const component = renderer.create(<TableCallItem call={call} hidden={'next'}/>,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('TableCallItem with two props hidden finished', () => {
        const component = renderer.create(<TableCallItem call={call} hidden={'finished'}/>,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('TableCallItem with three props hidden all and remove func', () => {
        const component = renderer.create(<TableCallItem call={call} hidden={'all'} remove={jest.fn()}/>,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

})