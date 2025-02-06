import axios from "axios"

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in handle submit");
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/posts.json", params).then(response => {console.log(response.data)
      window.location.href = "/"
    })
    console.log("You posted a blog post!");
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
