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

  const handleUpdate = (params, post) => {
    console.log("Updating Post");
    axios.patch(`http://localhost:3000/posts/${post.id}.json`, params).then(response => {
      console.log(response.data)
      setIsPostsShowVisible(false)
      // Loop through posts array
      // find the post I want to update
      // swap out the current values for response.data
      setPosts(posts.map(p => p.id === response.data.id ? response.data : p))
    })
  }

  const handleDestroy = (post) => {
    console.log("Deleting Post");
    axios.patch(`http://localhost:3000/posts/${post.id}.json`).then(response => {
      console.log(response.data)
      // Loop through the array of posts, delete the ones with the id of recipe.id (the post that is selected)
      setPosts(posts.filter(p => p.id !== post.id))
      setIsPostsShowVisible(false)
    })
  }

useEffect(handleIndex, []);

  return (
    <div>
      {/* <button onClick={handleIndex}>Pull Rails Data</button> */}
      <PostsNew onCreate={handleCreate} />
      <PostsIndex posts={posts} onShow={handleShow} />
      <Modal show={isPostShowVisible} onClose={handleCloseModal}>
        <PostsShow post={currentPost} onUpdate={handleUpdate} onDestroy={handleDestroy}/>
      </Modal>
    </div>
  );
}