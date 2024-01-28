import React, { useState, useEffect } from 'react';
import { Box, Typography, Link } from '@mui/material';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  const whenClicked = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundImage: 'url("https://source.unsplash.com/1600x900/?nature")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', marginBottom: '20px' }}>
        <Typography variant='h4' sx={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Blog Dashboard</Typography>
        <nav>
          <Link href="/home" sx={{ textDecoration: 'none', color: '#333', padding: '5px 10px', margin: '0 10px', borderRadius: '5px', backgroundColor: '#ffc107' }}>Home</Link>{' '}
          <Link href="/blogform" sx={{ textDecoration: 'none', color: '#333', padding: '5px 10px', margin: '0 10px', borderRadius: '5px', backgroundColor: '#ffc107' }}>Add</Link>
        </nav>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', flex: '1' , marginBottom:'20vh'}}>
        <Box sx={{ width: '80%', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
          <Typography variant='h4' sx={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Blogs</Typography>
          <ul style={{ listStyleType: 'none', padding: '0', width: '100%' }}>
            {blogs.map(blog => (
              <li key={blog.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', padding: '10px 0' }}>
                <a onClick={() => whenClicked(blog)} href="#" style={{ textDecoration: 'none', color: '#333', cursor: 'pointer' }}>{blog.id}. {blog.title}</a>
              </li>
            ))}
          </ul>
        </Box>
      </Box>

      <Box sx={{ position:'fixed',backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', marginTop: '80vh', width:'100%', paddingBottom:'40vh'}}>
        <Typography variant='h4' sx={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Blog Details</Typography>
        {selectedBlog && (
          <div>
            <p><strong>UserId:</strong> {selectedBlog.userId}</p>
            <p><strong>Id:</strong> {selectedBlog.id}</p>
            <p><strong>Title:</strong> {selectedBlog.title}</p>
          </div>
        )}
      </Box>
    </Box>
  );
}

export default Home;
