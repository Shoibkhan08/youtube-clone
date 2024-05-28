import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import './sass/style.css';


export default function Videodetail({ data: { id:{videoId}, snippet } }) {
  
  return (
    <>
  
      <Card sx={{ height: "290px",boxShadow:'none'}}>

        <CardActionArea  >
          <Link to={videoId ? `/video/${videoId}` : ''} style={{ textDecoration: 'none' }}  >
            <CardMedia sx={{ backgroundPosition: 'cover',borderRadius:'10px'  }}
              component="img"
              height="200"
              image={snippet?.thumbnails?.high?.url}
              alt={snippet.title}
            />
          </Link>
          <CardContent sx={{display:'flex',p:"10px  5px"}}>
            <Box>
            <Avatar alt="Remy Sharp" src={snippet.thumbnails.default.url} sx={{ width: 35, height: 35 }}/>
            </Box>
            <Box sx={{px:'10px'}}>
            <Link to={videoId ? `/video/${videoId}` : ''} style={{textDecoration:'none',color:'#000'}}>
              <Typography gutterBottom variant="p" fontWeight='bold' id="title">
                {snippet.title}
              </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : ""} style={{textDecoration:'none',color:'#000'}}>
            <Typography variant="p" color="text.secondary" sx={{textDecoration:'none'}} id="ctitle">
              {snippet.channelTitle}
            </Typography>
            </Link>
            </Box>
          </CardContent>
        </CardActionArea>

      </Card>






    </>
  );
}