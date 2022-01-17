import React from 'react';
import renderer from 'react-test-renderer';
import NextCall from "./NextCall.js";

const calls = [
    {
        id: 1641294575511,
        milisec: 1641273300511,
        name: "Петя",
        phone: "056-34-45-111",
        time: "07:15",
    },
    {
        id: 1641294575611,
        milisec: 1641273300511,
        name: "Vasia",
        phone: "056-34-45-111",
        time: "07:11"
    },
    {
        id: 1641294575521,
        milisec: 1641273300511,
        name: "Misha",
        phone: "056-34-45-111",
        time: "09:25"
    },
    {
        id: 1641294574444,
        milisec: 1641273302451,
        name: "Grisha",
        phone: "056-34-45-111",
        time: "11:17"
    }

];

const callsFake = [];


const callsOneUndefined = [
    {
        id: undefined,
        milisec: undefined,
        name: undefined,
        phone: undefined,
        time: undefined,
    },
];

const callsOneNull = [
    {
        id: null,
        milisec: null,
        name: null,
        phone: null,
        time: null,
    },
];

describe('NextCall component', () => {

    test('NextCall with props', () => {
        const component = renderer.create(<NextCall calls={calls}/>,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('NextCall with props fake calls', () => {
        const component = renderer.create(<NextCall calls={callsFake}/>,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('NextCall with props one call undefined', () => {
        const component = renderer.create(<NextCall calls={callsOneUndefined}/>,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('NextCall with props one call null', () => {
        const component = renderer.create(<NextCall calls={callsOneNull}/>,);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

})