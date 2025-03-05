import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../../api/blogs'; // 🔥 Importação correta

const BusinessBlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const loadBlogs = async () => {
            const data = await fetchBlogs();
            setBlogs(data.slice(0, 3));
        };
        loadBlogs();
    }, []);

    return (
        <section className="business_blog_section">
            <div className="container">
                <h2>Últimas do Blog</h2>
                <div className="row">
                    {blogs.map(blog => (
                        <div className="col-lg-4" key={blog._id}>
                            <Link to={`/blog-single/${blog.slug}`}>
                                <img src={`http://localhost:5001${blog.screens}`} alt={blog.title} />
                                <h3>{blog.title}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessBlogSection;
