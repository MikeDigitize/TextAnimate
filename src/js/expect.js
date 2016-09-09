export function Expect(val) {
	return {
		toBe(result) {
			return val === result;
		},
		notToBe(result) {
			return val !== result;
		},
		toHaveLengthOf(length) {
			return val.length === length;
		}
	}
}