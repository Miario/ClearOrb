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
    const { title, short_desc, long_desc, slug, alt, url, github } = this.props;
    let modalButton;
    if(github !== '') {
      modalButton = 
        <div>
          <div className="button-modal-site visible"><a href={url}>View Site</a></div>
          <div className="button-modal-site button-modal-git visible"><a href={github}>Git Hub</a></div>
        </div>
    } else {
      modalButton = 
        <div className="button-modal-site visible"><a href={url}>View Site</a></div>
    }
    return (
      <div>
        <div className="button button-standard" onClick={this.openModal}>Learn More</div>
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
            <div className="modal-title">{title}</div>
            <div className="modal-tag">{short_desc}</div>
            <div className="detail">{long_desc}</div>
          </div>
          {modalButton}
          <div className="close" onClick={this.closeModal}>x</div>
        </Modal>
      </div>
    );
  }
}

export default WebsitesModal;