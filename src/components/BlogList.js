const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((post) => (
                <div className="post-preview" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>Written by: {post.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;