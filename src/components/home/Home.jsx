import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, Grid, Paper, Card, CardContent, AppBar, Toolbar } from '@mui/material';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState({ userId: '', id: '', title: '' });

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    const whenClicked = (userId, id, title) => {
        setSelectedBlog({ userId, id, title });
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#3f51b5', paddingBottom: '50px', paddingTop: '20px' }}>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, bgcolor: '#333' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="body1" sx={{ color: '#fff', marginRight: '20px' }}>
                        <RouterLink to="/home" style={{ textDecoration: 'none', color: '#fff' }}>Home</RouterLink>
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff' }}>
                        <RouterLink to="/blogform" style={{ textDecoration: 'none', color: '#fff' }}>Add Blog</RouterLink>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Typography variant="h3" align="center" sx={{ marginTop: '20px', color: '#fff' }}>Welcome to Blog Dashboard</Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Paper sx={{ padding: '20px', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <Typography variant="h5" sx={{ marginBottom: '20px', color: '#333' }}>Recent Blogs</Typography>
                        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                            {blogs.map(blog => (
                                <li key={blog.id} style={{ marginBottom: '10px' }}>
                                    <Link onClick={() => whenClicked(blog.userId, blog.id, blog.title)} sx={{ color: '#007bff', textDecoration: 'none', cursor: 'pointer' }}>
                                        {blog.id}. {blog.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card sx={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <CardContent>
                            <Typography variant="h5" sx={{ marginBottom: '20px', color: '#333' }}>Selected Blog</Typography>
                            <Typography variant="body1" sx={{ color: '#333' }}>UserId: {selectedBlog.userId}</Typography>
                            <Typography variant="body1" sx={{ color: '#333' }}>Id: {selectedBlog.id}</Typography>
                            <Typography variant="body1" sx={{ color: '#333' }}>Title: {selectedBlog.title}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;