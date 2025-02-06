export function PostsShow({ post, onUpdate, onDestroy }) {
  const handleUpdate = (event) => {
    event.preventDefault();
    console.log('handling update');
    const params = new FormData(event.target)
    onUpdate(params, post)
  }

  const handleRemove = () => {
    console.log("Post Deleted")
    onDestroy(post)
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
      <button onClick={handleRemove}>Detele Post</button>
    </div>
  )
}