import {createSlice} from '@reduxjs/toolkit';

const statsSlice = createSlice({
  name: 'stats',
  initialState: [],
  reducers: {
    addStat: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {addStat} = statsSlice.actions;

export default statsSlice.reducer;
