/** @jsx React.DOM **/
var React = require("React");
var TransactionRow = React.createClass({
  render: function(){
    "use strict";
      var React = require("React");
      return(
            <tr className='transactionRow'>
              <td>{this.props.transaction.trans_date} </td>
              <td>{React.DOM.a({href: this.props.transaction.transaction_url}, this.props.transaction.xid)}</td>
              <td>{this.props.transaction.status}</td>
              <td>{this.props.transaction.nice_instr}</td>
              <td>{this.props.transaction.h_fname}</td>
              <td>{this.props.transaction.h_lname}</td>
              <td>{this.props.transaction.total}</td>
            </tr>
           );
  }
});
module.exports = TransactionRow;
