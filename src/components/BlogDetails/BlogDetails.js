import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogSingle = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5001/api/blogs/slug/${slug}`)
            .then(response => {
                setBlog(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar detalhes do blog:', error);
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <p>Carregando...</p>;
    if (!blog) return <p>Blog não encontrado.</p>;

    return (
        <section className="blog_details_section section_space bg-light">
            <div className="container">
                <div className="details_item_image">
                    <img src={`http://localhost:5001${blog.screens}`} alt={blog.title} />
                </div>
                <h2 className="details_item_title">{blog.title}</h2>
                <p>{blog.description}</p>
                <ul className="post_meta unordered_list">
                    <li>
                        <img src="../../images/icons/icon_user.svg" alt="Icon User" /> {blog.author}
                    </li>
                    <li>
                        <img src="../../images/icons/icon_calendar.svg" alt="Icon Calendar" /> {blog.create_at}
                    </li>
                    <li>
                        <img src="../../images/icons/icon_chat.svg" alt="Icon Chat" /> {blog.comment} Comentários
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default BlogSingle;
