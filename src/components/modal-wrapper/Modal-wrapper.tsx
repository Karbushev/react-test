import Modal from 'react-modal';
import React  from 'react';
import { closeModal, selectIsModalOpen, selectModalComponent } from '../../store/reducers/Modal.reducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ModalsEnum } from '../../consts/modals.enum';
import { MODALS } from '../../consts/modals.const';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('body');

export function ModalWrapper() {
  const modalIsOpen = useAppSelector(selectIsModalOpen);
  const template = useAppSelector(selectModalComponent) as ModalsEnum;
  const dispatch = useAppDispatch();

  function close() {
    dispatch(closeModal());
  }

  function getModal(template: ModalsEnum) {
    return MODALS[template];
  }

  return modalIsOpen ? (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={close}
    >
      <div className="modal-wrapper">
        {getModal(template)}
      </div>
    </Modal>
  ) : null;
}
