import { createSlice } from '@reduxjs/toolkit';

const accordionSlice = createSlice({
  name: 'accordion',
  initialState: {
    activeIndex: null,
  },
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActiveIndex } = accordionSlice.actions;
export default accordionSlice.reducer;