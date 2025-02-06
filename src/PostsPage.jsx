import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { PostsShow } from './PostsShow';
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [isPostShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

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
    setCurrentPost(post);
    console.log("After current post");
    setIsPostsShowVisible(true);
    console.log("after showvisible");
  }

  const handleCloseModal = () => {
    console.log("close modal");
    setIsPostsShowVisible(false);
  }

useEffect(handleIndex, []);

  return (
    <div>
      {/* <button onClick={handleIndex}>Pull Rails Data</button> */}
      <PostsNew />
      <PostsIndex posts={posts} onShow={handleShow} />
      <Modal show={isPostShowVisible} onClose={handleCloseModal}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}