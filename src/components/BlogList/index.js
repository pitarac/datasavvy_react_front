import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/blogs')
            .then(response => setBlogs(response.data))
            .catch(error => console.error('Erro ao buscar blogs:', error));
    }, []);

    return (
        <div className="blog-list">
            {blogs.length > 0 ? (
                blogs.map(blog => (
                    <div key={blog._id} className="blog-item">
                        <img src={`http://localhost:5001${blog.screens}`} alt={blog.title} />
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <Link to={`/blog-single/${blog.slug}`}>Leia Mais</Link>
                    </div>
                ))
            ) : (
                <p>Nenhum blog encontrado.</p>
            )}
        </div>
    );
};

export default BlogList;
