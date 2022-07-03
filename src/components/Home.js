import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", "author": "Sbanisethu", id: 1 },
        { title: "Welcome Party!", body: "lorem ipsum...", "author": "Talent", id: 2 },
        { title: "Web dev top tips", body: "lorem ipsum...", "author": "Sbanisethu", id: 3 }
    ]);
    
    return (
        <div className="home">
            {blogs.map((post) => (
                // The Id must be unique for each post otherwise
                // whatever we are trying to do, won't work.
                <div className="post-preview" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>Written by: {post.author}</p>
                </div>
            ))}
        </div> 
    );
}

export default Home;