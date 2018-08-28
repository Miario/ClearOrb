import React, { Component } from 'react';
import Modal from 'react-modal';
import './modal.css';



Modal.setAppElement('#root')

class WebsitesModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <div className="button" onClick={this.openModal}>Open Modal</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="modal"
          overlayClassName="overlay"
          contentLabel="Example Modal"
        >
        <div className="">
          <div className="window">
            <div className="slide"><img src={ require(`../Images/modal_1.png`) } /></div>
          </div>
          <div className="info-box">
            <div className="title">Title</div>
            <div className="tag-modal">Tag</div>
            <div className="detail">Roambi provides analytics, reporting, 
            and business intelligence for companies to use on the go. 
            A Wordpress hosted site written in PHP and Javascript with 
            Hubspot Integration.</div>
          </div>
          <div className="button-modal visible">Button</div>
          <div className="close" onClick={this.closeModal}>x</div>
        </div>
        </Modal>
      </div>
    );
  }
}

export default WebsitesModal;