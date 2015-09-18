var React = require('react'),
    _ = require('underscore');

module.exports = React.createClass({displayName: "exports",
    propTypes: {
        navBar: React.PropTypes.array // The JSON array returned from js/model/NavModel.getNavBarItems passed on from main
    },
    render: function() {
         var items = this.props.navBar.map( function(item) {
            var navItem = React.createElement("li", null, React.createElement("a", {href: item.url},  item.title));
            return navItem;
        });

        return (
            React.createElement("nav", {className: "navbar navbar-default"}, 
             React.createElement("div", {className: "container"}, 
                  React.createElement("div", {className: "navbar-header imageAlign"}, 
                    React.createElement("img", {className: "logo", src: "http://placehold.it/400x20&text=slide1"})
                  ), 
                  React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
                        items
                  )
             )
            )
        );
    }
});