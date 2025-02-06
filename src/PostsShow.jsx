export function PostsShow({ posts }) {
  return (
    <div>
        <h2><b>Title: </b>{posts.title}</h2>
        <p>Body: {posts.body}</p>
        <p>Image: {posts.image}</p>
    </div>
  )
}