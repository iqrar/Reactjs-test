var express = require('express'),
    app = express(),
    React = require('react'),
    DOM = React.DOM, html = DOM.html, div = DOM.div, script = DOM.script,
    main = React.createFactory(require('./js/_jsx/views/main')),
    model = require('./js/model/NavModel');

app.get('/test', function (req, res) {
    res.type('html');
    res.send(React.renderToStaticMarkup(main({navBar: model.getNavBarItems()}), html));
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('dashboard server listening at http://localhost:', port+'/test');
});

app.use(express.static(__dirname+'/css'));