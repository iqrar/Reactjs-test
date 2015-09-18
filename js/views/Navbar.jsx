var React = require('react'),
    _ = require('underscore');

module.exports = React.createClass({
    propTypes: {
        navBar: React.PropTypes.array // The JSON array returned from js/model/NavModel.getNavBarItems passed on from main
    },
    render: function() {
         var items = this.props.navBar.map( function(item) {
            var navItem = <li><a href={item.url}>{ item.title }</a></li>;
            return navItem;
        });

        return (
            <nav className = "navbar navbar-default">
             <div className = "container">
                  <div className = "navbar-header imageAlign">
                    <img  className = "logo" src='http://placehold.it/400x20&text=slide1'/>
                  </div>
                  <ul className = "nav navbar-nav navbar-right">
                        {items}
                  </ul>
             </div>
            </nav>
        );
    }
});