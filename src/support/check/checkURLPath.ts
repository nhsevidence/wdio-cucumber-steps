/**
 * Check if the current URL path matches the given path
 * @param  {String}   falseCase    Whether to check if the path matches the
 *                                 expected value or not
 * @param  {String}   expectedPath The expected path to match against
 */
export async function checkUrlPath(
	falseCase: string,
	expectedPath: string
): Promise<void> {
	let currentUrl = (await browser.getUrl()).replace(/http(s?):\/\//, "");
	const domain = `${currentUrl.split("/")[0]}`;

	currentUrl = currentUrl.replace(domain, "");

	if (falseCase) {
		expect(currentUrl).not.toEqual(expectedPath);
	} else {
		expect(currentUrl).toEqual(expectedPath);
	}
}
