import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';

export function PostsPage() {
  const handleIndex = () => {
    console.log('Retrieving information...');
     // Make a request for a user with a given ID
    axios.get('http://localhost:3000/posts.json')
    .then(function (response) {
      console.log(response.data);
      posts = response.data
    })
  }

  let posts = [];

  return (
    <div>
      <button onClick={handleIndex}>Pull Rails Data</button>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}