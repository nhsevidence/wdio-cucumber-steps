/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/clickElement.js */
import checkIfElementExists from "../lib/checkIfElementExists";

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
export function clickElement(
	action: string,
	type: string,
	selector: string
): void {
	const elem = type === "link" ? `=${selector}` : selector;
	const method = action === "click" ? "click" : "doubleClick";

	checkIfElementExists(selector2);

	$(elem)[method];
}
// module.exports = (action, type, element) => {
// 	/**
// 	 * Element to perform the action on
// 	 * @type {String}
// 	 */
// 	const elem = type === "link" ? `=${element}` : element;

// 	/**
// 	 * The method to call on the browser object
// 	 * @type {String}
// 	 */
// 	const method: string = action === "click" ? "click" : "doubleClick";

// 	checkIfElementExists(elem);

// 	browser[method](elem);
// };
