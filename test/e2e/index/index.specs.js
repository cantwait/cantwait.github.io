describe("yoda-app-protactor-tests", function() {
	it('should show a title', function(){
	browser.get('http://localhost:9000/#/');
	expect(browser.getTitle()).toEqual('Sample Application');
	});
});
	