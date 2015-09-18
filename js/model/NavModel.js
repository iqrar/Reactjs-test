
var _ = require('underscore');

var navBarJSON = [
    {
        
        'url': 'https://ia.inspera.no',
        'newTab': true,
        'title': 'Inspera Assessment'
        
    },
    {
        
        'url': 'http://www.idunn.no',
        'newTab': true,
         'title': 'Idunn'
    },
    {   
        
        'url': 'http://www.creaza.no',
        'newTab': true,
        'title': 'Creaza'
        
    }
];

function sortByTitle(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

var getNavBarItems = function () {
    return sortByTitle(navBarJSON, 'title');
};
    
module.exports ={
    getNavBarItems : getNavBarItems,
    navBarJSON : navBarJSON
};
