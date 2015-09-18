jest.dontMock('../js/model/NavModel.js');

describe('length and equality', function() {

	 it('pass if number of items in sorted array is equal to three', function() {
	   var getNavBarItems = require('../js/model/NavModel.js').getNavBarItems;
	   expect(getNavBarItems().length).toEqual(3);

	 });
	 
	 it('pass if sorted and unsorted arrays are equal', function() {
	   var getNavBarItems = require('../js/model/NavModel.js').getNavBarItems;
	   var JSON = require('../js/model/NavModel.js').navBarJSON;
	   expect(getNavBarItems().length).toEqual(JSON.length);

	 });
 
});

 
  


