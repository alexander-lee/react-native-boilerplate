import { createAction } from 'redux-actions';
import fetcher from '~/utils/fetcher';

// Actions we dispatch in our Action Creators
export const readPostByIdSucceeded = createAction('READ_POST_BY_ID_SUCCEEDED');
export const readPostsSucceeded = createAction('READ_POSTS_SUCCEEDED');
export const votePostByIdSucceeded = createAction('VOTE_POST_BY_ID_SUCCEEDED');

const fakePosts = [
  {
    'id': 4,
    'url': 'http://localhost:8000/api/posts/4',
    'created': '2017-10-14T03:28:30.463977Z',
    'owner': 'http://localhost:8000/api/profiles/1',
    'owner_name': 'liquidfired',
    'title': 'cool post m8',
    'vote_count': 0,
  },
  {
    'id': 3,
    'url': 'http://localhost:8000/api/posts/3',
    'created': '2017-10-10T04:28:11.820238Z',
    'owner': 'http://localhost:8000/api/profiles/1',
    'owner_name': 'liquidfired',
    'title': 'Title',
    'vote_count': 0,
  },
  {
    'id': 2,
    'url': 'http://localhost:8000/api/posts/2',
    'created': '2017-10-05T01:27:34.174526Z',
    'owner': 'http://localhost:8000/api/profiles/1',
    'owner_name': 'liquidfired',
    'title': 'Cool beans :',
    'vote_count': 0,
  },
  {
    'id': 1,
    'url': 'http://localhost:8000/api/posts/1',
    'created': '2017-10-05T01:27:27.948864Z',
    'owner': 'http://localhost:8000/api/profiles/1',
    'owner_name': 'liquidfired',
    'title': 'My Awesome Post',
    'vote_count': 0,
  },
];

// Action Creators
export const readPostById = (postId) => {
  return async (dispatch) => {
    // const post = await fetcher.get(`localhost:8000/api/posts/${postId}`);

    const post = fakePosts.find((p) => p.id === postId);
    dispatch(readPostByIdSucceeded({ post }));
  };
};

export const readPosts = () => {
  return async (dispatch) => {
    // const body = await fetcher.get('localhost:8000/api/posts');
    const posts = fakePosts;

    dispatch(readPostsSucceeded({ posts }));
  };
};

export const votePostById = (postId, isUpvote) => {
  return async (dispatch) => {
    const post = fakePosts.find((p) => p.id === postId);

    if (isUpvote) {
      post.vote_count += 1;
      // body = await fetcher.post(`localhost:8000/api/posts/${postId}/vote`);
    }
    else {
      post.vote_count -= 1;
      // body = await fetcher.delete(`localhost:8000/api/posts/${postId}/vote`);
    }

    dispatch(votePostByIdSucceeded({ post }));
  };
};
