/**
 * @jsx React.DOM
 */
/**
 * Created by michaelarchibald on 10/20/14.
 */
"use strict";
var React = require('react');
var TransactionContainer = React.createClass({
    render: function () {
        var Grid = require('react-bootstrap/Grid');
        var TransactionTable = require("Transactions/table");
        var Col = require('react-bootstrap/Col');
        var Row = require('react-bootstrap/Row');
        var Accordion = require('react-bootstrap/Accordion');
        var Panel = require('react-bootstrap/Panel');
        return (
            <Grid>
                <Row>
                    <Col xs={2} md={2}>
                        <Accordion>
                            <Panel header="Search Terms 1" key={1}>
                                <p>Test</p>
                            </Panel>
                            <Panel header="Search Terms 2" key={2}>
                                <p>Test</p>
                            </Panel>
                            <Panel header="Search Terms 3" key={3}>
                                <p>Test</p>
                            </Panel>
                        </Accordion>
                    </Col>
                    <Col xs={10} md={10}>
                        <TransactionTable transactions={this.props.transactions} > </TransactionTable>
                    </Col>
                </Row>
            </Grid>
        );
    }
});
module.exports = TransactionContainer;
