var GridObjectTest = require('./gridObjectTestUtils.spec.js');
var grid1 = new GridObjectTest('grid1');

describe('grid', function () {

    beforeEach(function () {
        browser.get('index.html#!/view1');
    });

    it('should have three visible rows', function () {
        grid1.expectRowCount(3);
    });

    it('have expected header values', function () {
        grid1.expectHeaderColumns(['First Name', 'Last Name', 'Company', 'Employed']);
    });

    it('should have correct cell values in the first row', function () {
        // checking individual cells usually gives a better stack trace when there are errors
        grid1.expectCellValueMatch(0, 0, 'Cox');
        grid1.expectCellValueMatch(0, 1, 'Carney');
        grid1.expectCellValueMatch(0, 2, 'Enormo');
        grid1.expectCellValueMatch(0, 3, 'true');
    });

    it('should have correct cell values in the next two rows', function () {
        // checking in bulk is convenient to write, but can be less informative with errors
        grid1.expectRowValuesMatch(1, ['Lorraine', 'Wise', 'Comveyer', 'false']);
        grid1.expectRowValuesMatch(2, ['Nancy', 'Waters', 'Fuelton', 'false']);
    });
});