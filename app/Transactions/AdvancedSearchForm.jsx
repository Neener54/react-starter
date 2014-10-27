/**
 * @jsx React.DOM
 */

var React = require('react');
var AdvancedSearchForm = React.createClass({
    render: function () {
        "use strict";
        var Input = require('react-bootstrap/Input');
        var Panel = require('react-bootstrap/Panel');
        var Grid = require('react-bootstrap/Grid');
        var Row = require('react-bootstrap/Row');
        var Col = require('react-bootstrap/Col');
        return (
            <div>
                    <Row>
                        <Col md={12} xs={12}>
                            <Panel header="Transaction Details">
                                <Col md={6} xs={6}>
                                    <Input type="select" defaultValue="All" label="Type">
                                        <option value="All">All</option>
                                        <option value="Order">All</option>
                                        <option value="Credit">All</option>
                                        <option value="Postauth">All</option>
                                        <option value="Void">All</option>
                                        <option value="Return">All</option>
                                    </Input>
                                    <Input type="select" defaultValue="All" label="Payment Type">

                                    </Input>
                                </Col>
                                <Col md={6} xs={6}>

                                </Col>
                            </Panel>
                        </Col>
                    </Row>
            </div>
        )
    }
});



module.exports = AdvancedSearchForm;
