import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import commentsReducer from './commentsReducer';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
  },
});

export default store;