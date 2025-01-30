
export function PostsIndex({ posts }) {
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="blogPosts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} />
        </div>
      ))}


    </div>
  );
}
