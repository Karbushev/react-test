import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducers/Modal.reducer';
import stackReducer from './reducers/Stack.reducer';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    stack: stackReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
