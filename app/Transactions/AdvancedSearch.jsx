/**
 * @jsx React.DOM
 */
var React = require('react');
var AdvancedSearch = React.createClass({
   render: function(){
       var React = require('react');
       var Modal = require('react-bootstrap/Modal');
       var ModalTrigger = require('react-bootstrap/ModalTrigger');
       var Button = require('react-bootstrap/Button');
       var AdvancedSearchForm = require('Transactions/AdvancedSearchForm');
       var AdvancedSearchModal = function(){
           "use strict";
           return(
               <Modal title="Advanced Search" className="modal-lg">
                   <div className="modal-body">
                       <AdvancedSearchForm />
                   </div>
               </Modal>
           )
       }
       return(
           <ModalTrigger modal={<AdvancedSearchModal />}>
               <Button bsStyle="primary" bsSize="large">Advanced</Button>
           </ModalTrigger>
       )
   }
});
module.exports = AdvancedSearch;
