import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../api/blogs';  // 🔥 Importando corretamente

const BlogSidebar = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const loadBlogs = async () => {
            const data = await fetchBlogs();
            setBlogs(data.slice(0, 3));
        };
        loadBlogs();
    }, []);

    return (
        <aside className="sidebar">
            <h3>Posts Relacionados</h3>
            <ul>
                {blogs.map(blog => (
                    <li key={blog._id}>
                        <Link to={`/blog-single/${blog.slug}`}>
                            {blog.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default BlogSidebar;
