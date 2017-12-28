import React from 'react';
import Modal from 'react-modal';

import closeButton from '../../assets/closeButton.png';
import { SHARED_MODAL_STYLES } from '../../shared/constants';
import "./PhotoModal.css";

const PhotoModal = ({ onClose, photoUrl, isOpen }) => (
  <Modal isOpen={isOpen} style={SHARED_MODAL_STYLES} contentLabel="">
    <button className="Shared-modal-close-button" onClick={onClose}>
      <img src={closeButton} alt="" />
    </button>
    <div className="content">
      <img src={photoUrl} />
    </div>
  </Modal>
);

export default PhotoModal;
