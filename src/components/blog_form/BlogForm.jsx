import React from 'react';
import { Box, Typography, Card, Stack, TextField, TextareaAutosize, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15vh' }}>
      <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '4vh 4vw', width: '50%' }}>
        <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '20px' }}>Add Blog</Typography>
        <Stack spacing={2}>
          <TextField fullWidth label="Blog Name" variant="outlined" />
          <TextField fullWidth label="Author Name" variant="outlined" />
          <TextareaAutosize minRows={7} placeholder="Description" style={{ width: '100%', resize: 'vertical', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          <Button variant='contained' onClick={() => { navigate('/home') }}>Submit</Button>
        </Stack>
      </Card>
    </Box>
  );
}

export default BlogForm;
