import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../api/blogs';  // 🔥 Importando corretamente
import Bg from '../../images/shapes/bg_pattern_1.svg';
import icon1 from '../../images/icons/icon_calendar.svg';

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const loadBlogs = async () => {
            const data = await fetchBlogs();
            setBlogs(data.slice(0, 3)); // Pegamos apenas os 3 primeiros
        };
        loadBlogs();
    }, []);

    return (
        <section className="blog_section section_space bg-light" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <h2 className="heading_text mb-0">Artigos e postagens</h2>
                <div className="row">
                    {blogs.map(blog => (
                        <div className="col-lg-4" key={blog._id}>
                            <div className="blog_post_block">
                                <div className="blog_post_image">
                                    <Link to={`/blog-single/${blog.slug}`}>
                                        <img src={`http://localhost:5001${blog.screens}`} alt={blog.title} />
                                    </Link>
                                </div>
                                <h3 className="blog_post_title">
                                    <Link to={`/blog-single/${blog.slug}`}>{blog.title}</Link>
                                </h3>
                                <ul className="post_meta unordered_list">
                                    <li>
                                        <img src={icon1} alt="Icon Calendar" /> {blog.create_at}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
