/**
 * @author web_alchemist
 * @Email s-amadou.taal@lwtech.edu
 * @Date 2021-02-21
 *
 * Checks if a given year is a leap year according to the Gregorian
 * calendar.
 *
 * @param {number} year - The year to check.
 * @returns {boolean} True if the year is a leap year, False otherwise.
 * @throws {Error} If the year is less than 1582.
 *
 * Before 1582, the Julian calendar was used. We only care about years
 * after this point.
 */
export function leapYear(year) {
	if (year < 1582) {
		throw new Error('Year cannot be less than 1582');
	}
	if (year === 1582) {
		return true;
	}
	if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
		return true;
	}
	return false;
}
