import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {},
  reducers: {
    setComments: (state, action) => ({
      ...state,
      [action.payload.postId]: action.payload.comments,
    }),
  },
});

export const { setComments } = commentsSlice.actions;
export default commentsSlice.reducer;
