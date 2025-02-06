import axios from "axios"

export function PostsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in handle submit");
    const params = new FormData(event.target)
    onCreate(params)
    event.target.reset()
  }

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" />
        </div>
        <div>
          Body: <input type="text" name="body" />
        </div>
        <div>
        Image URL: <input type="text" name="image" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
