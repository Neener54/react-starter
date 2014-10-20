/**
 * @jsx React.DOM
 */
var React = require("react");
var TransactionTable = React.createClass({
    render: function () {
        "use strict";
        var React = require("react");
        var Table = require("react-bootstrap/Table");
        var transactions = this.props.transactions;
        var TransactionRow = require("Transactions/row");
        return (
            <Table striped bordered condensed hover responsive>
                <thead>
                    <th>Date</th>
                    <th>XID</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Total</th>
                </thead>
                <tbody>
                  {transactions.map(function (transaction) {
                      return <TransactionRow transaction={transaction} />
                  })}
                </tbody>
            </Table>
        )
    }
});
module.exports = TransactionTable;
