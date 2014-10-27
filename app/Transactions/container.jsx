/**
 * @jsx React.DOM
 */
/**
 * Created by michaelarchibald on 10/20/14.
 */

var React = require('react');
var TransactionContainer = React.createClass({
    render: function () {
        "use strict";
        var React = require('react');
        var Grid = require('react-bootstrap/Grid');
        var TransactionTable = require("Transactions/table");
        var Col = require('react-bootstrap/Col');
        var Row = require('react-bootstrap/Row');
        var Accordion = require('react-bootstrap/Accordion');
        var Panel = require('react-bootstrap/Panel');
        var Input = require('react-bootstrap/Input');
        var Label = require('react-bootstrap/Label');
        var ModalTrigger = require('react-bootstrap/ModalTrigger');
        var AdvancedSearch = require('Transactions/AdvancedSearch');
        var Button = require('react-bootstrap/Button');
        return (
            <div className="container-fluid">
                <Panel>
                    <Grid fluid={true}>
                        <Row>
                            <Col xs={2} md={2}>
                                <Panel header="Filters">
                                    <Label bsStyle="primary">Card</Label>
                                </Panel>
                                <br/>
                                <Accordion>
                                    <Panel header="Transaction Type" key={1}>
                                        <Input type="radio" label="Sale" name="type"/>
                                        <Input type="radio" label="Credit" name="type"/>
                                        <Input type="radio" label="Void" name="type"/>
                                    </Panel>
                                    <Panel header="Payment Type" key={2}>
                                        <Input type="radio" label="Card" name="payment_type"/>
                                        <Input type="radio" label="Check" name="payment_type"/>
                                    </Panel>
                                    <Panel header="Status" key={3}>
                                        <Input type="radio" label="Okay" name="status"/>
                                        <Input type="radio" label="Failed" name="status"/>
                                    </Panel>
                                </Accordion>
                            </Col>
                            <Col xs={10} md={10}>
                                <Row>
                                    <Col xs={12} md={12}>
                                        <form className="form-inline" role="form">
                                            <Input type="text" name="f_name" placeholder="First Name"  />
                                            <Input type="text" name="l_name" placeholder="Last Name"  />
                                            <Input type="submit" className="btn btn-default" value="search"/>
                                        </form>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Panel header="Transactions">
                                            <TransactionTable transactions={this.props.transactions} />
                                        </Panel>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </Panel>
                <AdvancedSearch />
            </div>

        );
    }
});
module.exports = TransactionContainer;
