import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../store/actions';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.find((post) => post.id === parseInt(id)));
  const user = useSelector((state) => state.users.find((user) => user.id === post?.userId));
  const comments = useSelector((state) => state.comments[id]);

  useEffect(() => {
    if (post) {
      dispatch(fetchComments(id));
    }
  }, [dispatch, post, id]);

  if (!post || !user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Author: {user.name}</h3>
      {comments?<h4>Comments</h4> : <h4>Loading Comments...</h4>}
      <ul>
        {comments?.map((comment) => (
          <li key={comment.id}>
            <p><strong>{comment.name}:</strong> {comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
