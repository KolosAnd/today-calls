import deleteCall from './indexUtil';
const calls = [
    {
        id: 1641294575511,
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

const finalCalls = [
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

describe('Test delete one call', () => {
    test('func Test delete one call', () => {
        const result = deleteCall(calls,1641294575511 );
        expect(result).toEqual(finalCalls);
    });

});