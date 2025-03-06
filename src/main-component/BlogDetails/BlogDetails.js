import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar'; // Nome correto (minúsculo)
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSingle from '../../components/BlogDetails/BlogDetails'; // Confirme que o nome está correto

const BlogDetails = () => {
    const { slug } = useParams();
    const [blogDetails, setBlogDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5001/api/blogs/slug/${slug}`)
            .then(response => {
                setBlogDetails(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar detalhes do blog:', error);
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <p>Carregando...</p>;
    if (!blogDetails) return <p>Blog não encontrado.</p>;

    return (
        <Fragment>
            <Header />
            <main className="page_content blog-details-page">
                <PageTitle 
                    pageTitle={blogDetails.title} 
                    pagesub={'Detalhes do Blog'} 
                    pageTop={'Blog'}
                />
                <BlogSingle blog={blogDetails} />
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default BlogDetails;
