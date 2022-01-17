import {getMilisecondsFromTime, getTimeCall, translateTimeStringToMiliseconds} from './timeFunc'

describe('Time Utils', () => {
    describe('Util getMilisecondsFromTime', () => {
        test('Testing getMilisecondsFromTime function with positive params', () => {
            expect(getMilisecondsFromTime(14, 25, 0)).toBe(51900000);
        })

        test('Testing getMilisecondsFromTime function with false params', () => {
            expect(getMilisecondsFromTime(undefined, null, 0)).toBe(NaN);
        })

        test('Testing getMilisecondsFromTime function with 0', () => {
            expect(getMilisecondsFromTime(0, 0, 0)).toBe(0);
        })
    })

    describe('Util getTimeCall', () => {
        test('Testing getTimeCall function with positive params', () => {
            const result = getTimeCall("07:15",1641294575511);
            expect(result).toBe(1641273300511);
        })

        test('Testing getTimeCall function with false params', () => {
            const result = getTimeCall("",1641294575511);
            expect(result).toBe(NaN);
        })

        test('Testing getTimeCall function with false params 2', () => {
            const result = getTimeCall("",undefined);
            expect(result).toBe(NaN);
        })
    })

    describe('Util translateTimeStringToMiliseconds', () => {
        test('Testing translateTimeStringToMiliseconds function with positive params', () => {
            const result = translateTimeStringToMiliseconds("07:15");
            expect(result).toBe(26100000);
        })

        test('Testing translateTimeStringToMiliseconds function with false params', () => {
            const result = translateTimeStringToMiliseconds("");
            expect(result).toBe(NaN);
        })
    })
})
