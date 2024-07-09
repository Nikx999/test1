import axios from 'axios';
import { setPosts } from './postsReducer';
import { setUsers } from './usersReducer';
import { setComments } from './commentsReducer';

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  dispatch(setPosts(response.data));
};

export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch(setUsers(response.data));
};

export const fetchComments = (postId) => async (dispatch) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  dispatch(setComments({ postId, comments: response.data }));
};
