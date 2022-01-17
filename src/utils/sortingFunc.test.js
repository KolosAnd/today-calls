import {sortNameAscending, sortNameDescending, sortTimeAscending, sortTimeDescending} from './sortingFunc'
const testingArr=[
    {milisec: "232132344234", name:"Vasya"},
    {milisec: "444452356666", name:"Peria"},
    {milisec: "333453422222", name:"Andriy"}
];

const testingArrMockTimeASC=[
    {milisec: "232132344234", name:"Vasya"},
    {milisec: "333453422222", name:"Andriy"},
    {milisec: "444452356666", name:"Peria"}
];

const testingArrMockTimeDESC=[
    {milisec: "444452356666", name:"Peria"},
    {milisec: "333453422222", name:"Andriy"},
    {milisec: "232132344234", name:"Vasya"},
];

const testingArrNameASC=[
    {milisec: "333453422222", name:"Andriy"},
    {milisec: "444452356666", name:"Peria"},
    {milisec: "232132344234", name:"Vasya"}
];

const testingArrNameDESC=[
    {milisec: "232132344234", name:"Vasya"},
    {milisec: "444452356666", name:"Peria"},
    {milisec: "333453422222", name:"Andriy"}
];

const testingArrFalse=[
    {milisec: NaN, name:""},
    {milisec: null, name:"null"},
    {milisec: undefined, name: undefined}
];
describe('Sorting Utils with write params', () => {
    test('Testing sorting time function Ascending', () => {
        const result = testingArr.sort(sortTimeAscending);
        expect(result).toEqual(testingArrMockTimeASC);
        expect(result[0].milisec).toBe("232132344234");
        expect(result[2].milisec).toBe("444452356666");
    });

    test('Testing sorting time function Descending', () => {
        const result = testingArr.sort(sortTimeDescending);
        expect(result).toEqual(testingArrMockTimeDESC);
        expect(result[0].milisec).toBe("444452356666");
        expect(result[2].milisec).toBe("232132344234");
    });

    test('Testing sorting name function Ascending', () => {
        const result = testingArr.sort(sortNameAscending);
        expect(result).toEqual(testingArrNameASC);
        expect(result[0].name).toBe("Andriy");
        expect(result[2].name).toBe("Vasya");
    });

    test('Testing sorting name function Descending', () => {
        const result = testingArr.sort(sortNameDescending);
        expect(result).toEqual(testingArrNameDESC);
        expect(result[0].name).toBe("Vasya");
        expect(result[2].name).toBe("Andriy");
    });
});

describe('Sorting Utils with wrong params', () => {
    test('Testing sorting time function Ascending False', () => {
        expect(testingArrFalse.sort(sortTimeAscending)).toEqual(testingArrFalse);
    });

    test('Testing sorting time function Descending False', () => {
        expect(testingArrFalse.sort(sortTimeDescending)).toEqual(testingArrFalse);
    });

    test('Testing sorting name function Ascending False', () => {
        expect(testingArrFalse.sort(sortNameAscending)).toBe(testingArrFalse);
    });

    test('Testing sorting name function Descending False', () => {
        expect(testingArrFalse.sort(sortNameDescending)).toBe(testingArrFalse);
    });
});