import axios from "axios"

export function PostsShow({ post }) {
  const handleUpdate = (event) => {
    event.preventDefault();
    console.log('handling update');
    const params = new FormData(event.target)
    axios.patch(`http://localhost:3000/posts/${post.id}.json`, params).then(response => {
      console.log(response.data)
      // window.location.href = "/"
    })
  }

  const handleDestroy = () => {
    console.log("Post Deleted")
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then(response => {
      console.log(response.data)
      window.location.href = "/"
    })
  }
  return (
    <div>
        <p><b>id: </b>{post.id}</p>
        <h2><b>Title: </b>{post.title}</h2>
        <p>Body: {post.body}</p>
        <p>Image: {post.image}</p>
    

      <form onSubmit={handleUpdate}>
          <h2><b>Title: </b><input type="text" name="title" defaultValue={post.title} /></h2>
          <p>Body: <input type="text" name="body" defaultValue={post.body} /></p>
          <p>Image: <input type="text" name="image" defaultValue={post.image} /></p>
          <button>Update Post</button>
      </form>
      <br />
      <br />
      <br />
      <button onClick={handleDestroy}>Detele Post</button>
    </div>
  )
}