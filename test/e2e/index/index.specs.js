describe("hello-app-protractor", function() {
	
	var ptor;

	describe("admiosTestProjectApp", function(){
		browser.get('/#');
		expect(browser.getTitle()).toBe('Hello');
	});
});