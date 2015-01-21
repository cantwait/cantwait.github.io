describe("yoda-app-protactor-tests", function() {
	beforeEach(function(){
		browser.get('http://localhost:9000/#/');
	});

	it('should show a title', function(){
		expect(browser.getTitle()).toEqual('Sample Application');
	});

	it('should have a h3 with text', function(){
		var yodaBtn = element(by.id('yodaBtn'));
		var inputText = element(by.id('inputText'));
		var pElement = element(by.id('success'));
		expect(yodaBtn.getText()).toBe('try me');

		//send text
		inputText.sendKeys('I will help you');

		yodaBtn.click();

		expect(pElement.getText()).not.toBeNull();

	});
});
	