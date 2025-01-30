
export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
        <button type="submit">Upload Picture</button>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
