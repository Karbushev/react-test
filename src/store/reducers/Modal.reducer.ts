import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ModalsEnum } from '../../consts/modals.enum';

export interface ModalState {
  isOpen: boolean;
  component: null | ModalsEnum;
}

const initialState: ModalState = {
  isOpen: false,
  component: null,
}

export const ModalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalsEnum>) => {
      state.isOpen = true;
      state.component = action.payload;
    },

    closeModal: (state) => {
      state.isOpen = false;
      state.component = null;
    }
  }
})

export const { openModal, closeModal } = ModalReducer.actions;

export const selectIsModalOpen = (state: RootState) => state.modal.isOpen;
export const selectModalComponent = (state: RootState) => state.modal.component;

export default ModalReducer.reducer;
