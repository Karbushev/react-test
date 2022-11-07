import React, { ReactElement } from 'react';
import { closeModal } from '../../store/reducers/Modal.reducer';
import './Modal-header.scss';
import { Dispatch } from 'redux';
import { SlClose } from 'react-icons/sl';
import { useAppDispatch } from '../../store/hooks';

export function ModalHeader(props: { title?: string }): ReactElement {
  const dispatch: Dispatch = useAppDispatch();

  function close(): void {
    dispatch(closeModal());
  }

  return (
    <div className="modal-header">
      <h2>{props.title}</h2>
      <SlClose className="modal-header__close" onClick={close}></SlClose>
    </div>
  );
}
