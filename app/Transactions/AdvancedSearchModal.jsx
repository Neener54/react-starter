/**
 * @jsx React.DOM
 */

var React = require('react');
var AdvancedSearchModal = React.createClass({
    render: function () {
        "use strict";
        var React = require('react');
        var Modal = require('react-bootstrap/Modal');
        var ModalTrigger = require('react-bootstrap/ModalTrigger');

        return (
            <Modal title="Advanced Search">
                <div className="modal-body">
                </div>
            </Modal>

        );
    }
});
module.exports = AdvancedSearchModal;
