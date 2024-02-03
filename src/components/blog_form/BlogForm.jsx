import { Box, Typography, Input, InputLabel, TextareaAutosize, Card, CardContent, Button} from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: '#e91e63' }}>
            <Card sx={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', width: '400px' }}>
                <CardContent>
                    <Typography variant='h3' align='center'>Add Blog</Typography>
                    <Box sx={{ mt: 3 }}>
                        <InputLabel htmlFor="blogName">Blog Name:</InputLabel>
                        <Input variant='contained' type="text" id="blogName" name="blogName" sx={{ width: '100%', mt: 1 }} />

                        <InputLabel htmlFor="authorName" sx={{ mt: 2 }}>Author Name:</InputLabel>
                        <Input variant='contained' type="text" id="authorName" name="authorName" sx={{ width: '100%', mt: 1 }} />

                        <InputLabel htmlFor="description" sx={{ mt: 2 }}>Description:</InputLabel>
                        <TextareaAutosize variant='contained' id="description" name="description" minRows={5} sx={{ width: '100%', mt: 1 }} />

                        <Button variant='contained' onClick={() => { navigate('/home') }} type="submit" sx={{ mt: 3, width: '100%' }}>Submit Blog</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default BlogForm;