
export function PostsIndex({ posts, onShow }) {
  console.log(posts);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {posts.map((post) => (
      <div key={post.id} className="blogPosts">
        <div>
          <h2>{post.title}</h2>
        </div>
        {/* <div>
          <p>{post.body}</p>
        </div> */}
        <div> 
          <img src={post.image} />
        </div>
        <button onClick={() => onShow(post)}>Read Blog</button>
        <br />
        </div>
      ))}

    </div>
  );
}
