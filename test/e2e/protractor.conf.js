exports.config = {
	capabilities: {
                  // You can use other browsers
                  // like firefox, phantoms, safari, IE (-_-)
                  'browserName': 'chrome' 
          },
	specs: [
		'../e2e/**/*.specs.js'
	],
	baseUrl: 'http://localhost:9000'
};