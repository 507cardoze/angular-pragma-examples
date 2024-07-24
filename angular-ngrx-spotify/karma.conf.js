module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', '@angular-devkit/build-angular'],
		plugins: [
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('@angular-devkit/build-angular/plugins/karma'),
		],
		client: {
			clearContext: true, // leave Jasmine Spec Runner output visible in browser
		},
		jasmineHtmlReporter: {
			suppressAll: true, // removes the duplicated failures
		},
		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, './coverage/angular-ngrx-spotify'),
			reports: ['html', 'lcovonly', 'text-summary'],
			fixWebpackSourcePaths: true,
			includeAllSources: true, // Ensure all sources are included for coverage
			check: {
				global: {
				  statements: 80,
				  branches: 80,
				  functions: 80,
				  lines: 80
				}
			  }
		},
		reporters: ['progress', 'kjhtml'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['Chrome'],
		singleRun: true,
	});
};
