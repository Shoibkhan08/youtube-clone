import React from 'react'
import {Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom'
import './sass/style.css'

export default function Slidevideo({ data: { id: { videoId }, snippet: { thumbnails, title, channelTitle } }}) {

    return (
        <>
            <Card sx={{ display: 'flex', my: "4px", boxShadow: 'none' }}>

                <Link to={videoId ? `/video/${videoId}` : ''}>
                    <CardMedia

                        style={{ width: "168px", height: '95px', borderRadius: '7px' }}
                        image={thumbnails.high.url}
                        alt="Live from space album cover"
                    />
                </Link>
                <Link to={videoId ? `/video/${videoId}` : ''} style={{ textDecoration: 'none' }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ py: 0, pt: "2px" }}>
                            <Typography component="div" variant="p" id='title2' fontWeight={600} sx={{ p: 0, fontSize: "13px", color: '#000' }}>
                                {title}
                            </Typography>
                            <Typography component="div" variant="p" fontSize="12px" sx={{ color: '#505050', display: 'flex', alignContent: 'center' }}>
                                {channelTitle}
                                <Box variant="p" sx={{ px: '4px', pt: '2px' }}>
                                    <CheckCircleIcon sx={{ fontSize: '13px' }} />
                                </Box>

                            </Typography>
                        </CardContent>

                    </Box>
                </Link>
            </Card>

        </>
    )
}
