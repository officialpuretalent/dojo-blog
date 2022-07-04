const BlogList = ({ blogs, title, handleDelete }) => {

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((post) => (
                <div className="post-preview" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>Written by: {post.author}</p>
                    <button onClick={() => handleDelete(post.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;