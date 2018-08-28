import React, { Component } from 'react';
import Modal from 'react-modal';
import './modal.css';



Modal.setAppElement('#root')

class WebsitesModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
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
    const { title, description, slug, alt, url } = this.props;
    return (
      <div>
        <div className="button" onClick={this.openModal}>Open Modal</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="modal"
          overlayClassName="overlay"
        >
          <div className="window">
            <div className="slide"><img src={ require(`../Images/${slug}.png`) } alt={alt} /></div>
          </div>
          <div className="info-box">
            <div className="title">{title}</div>
            <div className="tag-modal">Tag</div>
            <div className="detail">{description}</div>
          </div>
          <div className="button-modal-site visible"><a href={url}>View Site</a></div>
          <div className="button-modal-site button-modal-git visible"><a href={url}>Git Hub</a></div>
          <div className="close" onClick={this.closeModal}>x</div>
        </Modal>
      </div>
    );
  }
}

export default WebsitesModal;