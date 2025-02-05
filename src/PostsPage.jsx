import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function PostsPage() {
  const [posts, setPosts] = useState([]);

  const handleIndex = () => {
    console.log('Retrieving information...');
     // Make a request for a user with a given ID
    axios.get('http://localhost:3000/posts.json')
    .then(function (response) {
      console.log(response.data);
      setPosts(response.data);
    })
  }

  const handleShow = (post) => {
    console.log(post);
    setIsPostsShowVisible(true);
  }

  const handleCloseModal = () => {
    console.log("close modal");
    setIsPostsShowVisible(false);
  }

  const [isPostShowVisible, setIsPostsShowVisible] = useState(false);

useEffect(handleIndex, []);

  return (
    <div>
      {/* <button onClick={handleIndex}>Pull Rails Data</button> */}
      <PostsNew />
      <PostsIndex posts={posts} onShow={handleShow} />
      <Modal show={isPostShowVisible} onClose={handleCloseModal}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}