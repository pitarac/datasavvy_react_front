import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogList from '../../components/BlogList';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5001/api/blogs')
            .then(response => {
                setBlogs(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar blogs:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Carregando...</p>;

    return (
        <Fragment>
            <Header />
            <main className="page_content blog-page">
                <PageTitle 
                    pageTitle={'Veja nosso Blog'} 
                    pagesub={'Blog😍'} 
                    pageTop={'Nosso'}
                />
                <BlogList blogs={blogs} />
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default BlogPage;
