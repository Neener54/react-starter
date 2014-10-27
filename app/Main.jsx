/** @jsx React.DOM */

var Reflux = require("reflux");
var React = require("react");

// Basic styling
require("./style.css");
// Init relevant modules
// With a pages/router init only relevant modules for this page.

require("Transactions/init");
window.React = React;
var Application;
Application = React.createClass({
    getInitialState: function () {
        "use strict";
        return {transactions: this.props.transactions};
    },
    render: function () {
        "use strict";
        var TransactionContainer = require("Transactions/container");
        return (<TransactionContainer transactions={this.state.transactions} />);
    }
});
module.exports = Application;