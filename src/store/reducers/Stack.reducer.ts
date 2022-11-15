import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { STACK_MODULES_DATA } from '../initial-data/stack-modules';
import { Competency } from '../../interfaces/competency';

const initialState: Competency[] = STACK_MODULES_DATA;

export const StackReducer = createSlice({
  name: 'stack',
  initialState,
  reducers: {
    addStack: (state, action: PayloadAction<Competency>) => {
      state.push(action.payload);
    },
    addModule: (state, action: PayloadAction<any>) => {
      console.log('payload', action.payload);
      const stack = state.find((stack) => stack.name === action.payload.stackName.value);
      console.log('finded stack', stack);
      delete action.payload.stackName;
      stack?.modules.push(action.payload);
    }
  }
})

export const { addStack, addModule } = StackReducer.actions;

export const selectStacks = (state: RootState) => state.stack;

export default StackReducer.reducer
