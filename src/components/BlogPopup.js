import "../styles/BlogPopup.css"

function BlogPopup({ onClose }) {
  const blogPosts = [
    {
      title: "Latest Updates",
      content: "Lorem ipsum dolor sit amet",
      image:
        "https://placehold.co/600x400/EEE/31343C",
    },
    {
      title: "Recent Events",
      content: "Consectetur adipiscing elit",
      image:
        "https://placehold.co/600x400/EEE/31343C",
    },
  ]

  return (
    <div className="blog-popup">
      <div className="blog-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Blog</h2>
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <div className="post-image">
                <img src={post.image || "/placeholder.svg"} alt={post.title} />
              </div>
              <div className="post-content">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPopup

