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

  const handleCreate = (params) => {
    console.log("Trying to create post..");
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data)
      // Make a copy of the Post array and then add a new post to it
      // Resets the posts to the new array without refreshing
      setPosts([...posts, response.data])
    })
  }

useEffect(handleIndex, []);

  return (
    <div>
      {/* <button onClick={handleIndex}>Pull Rails Data</button> */}
      <PostsNew onCreate={handleCreate} />
      <PostsIndex posts={posts} onShow={handleShow} />
      <Modal show={isPostShowVisible} onClose={handleCloseModal}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}