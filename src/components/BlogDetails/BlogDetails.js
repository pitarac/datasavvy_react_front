import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import 'moment/locale/pt-br';

const BlogSingle = ({ blog }) => {
    return (
        <section className="blog_details_section section_space bg-light">
            <div className="container">
                {/* Exibir imagem do blog */}
                {blog.screens && (
                    <div className="details_item_image">
                        <img src={`http://localhost:5001${blog.screens}`} alt={blog.title} />
                    </div>
                )}

                {/* Título do Blog */}
                <h2 className="details_item_title">{blog.title}</h2>

                {/* Descrição Curta */}
                <p>{blog.description}</p>

                {/* Descrição Longa Formatada com Markdown */}
                <div className="details_item_content">
                    <ReactMarkdown>{blog.longDescription}</ReactMarkdown>
                </div>

                {/* Metadados do Blog */}
                <ul className="post_meta unordered_list">
                    <li>
                        <img src="../../images/icons/icon_user.svg" alt="Icon User" />
                        <strong>Autor:</strong> {blog.author?.name || 'Desconhecido'}
                    </li>
                    <li>
                        <img src="../../images/icons/icon_calendar.svg" alt="Icon Calendar" />
                        <strong>Publicado em:</strong> {moment(blog.create_at).format('LL')}
                    </li>
                    <li>
                        <img src="../../images/icons/icon_chat.svg" alt="Icon Chat" />
                        <strong>Comentários:</strong> {blog.comment || 0}
                    </li>
                    <li>
                        <img src="../../images/icons/icon_tag.svg" alt="Icon Tag" />
                        <strong>Categoria:</strong> {blog.category?.name || 'Sem categoria'}
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default BlogSingle;
