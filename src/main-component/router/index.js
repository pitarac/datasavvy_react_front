// src/main-component/router/index.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../HomePage/HomePage';
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import PricingPage from '../PricingPage/PricingPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import PortfolioSinglePage from '../PortfolioSinglePage/PortfolioSinglePage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import ServicePage from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import BlogPage from '../BlogPage/BlogPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import ContactPage from '../ContactPage/ContactPage';

// Importações das páginas administrativas
import Dashboard from '../../admin/Dashboard';
import BlogForm from '../../admin/BlogForm';
import EditBlog from '../../admin/EditBlog';
import ProjectForm from '../../admin/ProjectForm';
import EditProject from '../../admin/EditProject';
import ServiceForm from '../../admin/ServiceForm';
import EditService from '../../admin/EditService';
import TeamForm from '../../admin/TeamForm';
import EditTeam from '../../admin/EditTeam';
import ListBlogs from '../../admin/ListBlogs';
import ListProjects from '../../admin/ListProjects';
import ListServices from '../../admin/ListServices';
import ListTeams from '../../admin/ListTeams';
import Login from '../../admin/Login';
import PrivateRoute from '../../admin/PrivateRoute';

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home_software_company" element={<HomePage2 />} />
          <Route path="home_business_consulting" element={<HomePage3 />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio_details/:slug" element={<PortfolioSinglePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<ContactPage />} />  

          {/* Rotas do Painel Administrativo */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/admin/blogs/new" element={
            <PrivateRoute>
              <BlogForm />
            </PrivateRoute>
          } />
          <Route path="/admin/blogs/edit/:id" element={
            <PrivateRoute>
              <EditBlog />
            </PrivateRoute>
          } />
          <Route path="/admin/blogs" element={
            <PrivateRoute>
              <ListBlogs />
            </PrivateRoute>
          } />
          <Route path="/admin/projects/new" element={
            <PrivateRoute>
              <ProjectForm />
            </PrivateRoute>
          } />
          <Route path="/admin/projects/edit/:id" element={
            <PrivateRoute>
              <EditProject />
            </PrivateRoute>
          } />
          <Route path="/admin/projects" element={
            <PrivateRoute>
              <ListProjects />
            </PrivateRoute>
          } />
          <Route path="/admin/services/new" element={
            <PrivateRoute>
              <ServiceForm />
            </PrivateRoute>
          } />
          <Route path="/admin/services/edit/:id" element={
            <PrivateRoute>
              <EditService />
            </PrivateRoute>
          } />
          <Route path="/admin/services" element={
            <PrivateRoute>
              <ListServices />
            </PrivateRoute>
          } />
          <Route path="/admin/teams/new" element={
            <PrivateRoute>
              <TeamForm />
            </PrivateRoute>
          } />
          <Route path="/admin/teams/edit/:id" element={
            <PrivateRoute>
              <EditTeam />
            </PrivateRoute>
          } />
          <Route path="/admin/teams" element={
            <PrivateRoute>
              <ListTeams />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
