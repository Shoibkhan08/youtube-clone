import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import YouTube from 'react-youtube';
import { Box, Grid, Stack, Typography, Container } from '@mui/material'
import fetchFromAPI from '../API/fetchFromAPI'
import Sidevideo from './Slide';
import Avatar from '@mui/material/Avatar';
import { ThreeDots } from 'react-loader-spinner';
export default function Videodetail() {
  const { id } = useParams()
  const { getData, data } = fetchFromAPI()
  useEffect(() => {
    getData(`videos?part=snippet,statistics&id=${id}`)
  }, [id])
  const items = data.items
  // Check if data has elements before destructuring
  const videoDetail = !items ? "" : items[0]
  // Check if videoDetail is not null before destructuring
  const {
    snippet: { title, channelId, channelTitle, thumbnails },
    statistics: { viewCount, likeCount },
  } = videoDetail || { snippet: {}, statistics: {} };

  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: " " },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }
  const loader = <Container sx={{ display: 'flex', placeItems: 'center', justifyContent: 'center' }} > <ThreeDots
    visible={true}
    height="80"
    width="80"
    color="red"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""

  /> <h2> Loading...</h2> </Container>
  return (
    <>
        <Grid container minHeight={'90vh'} spacing={3} >
      {!items ? loader : <>
          <Grid item xl={8.5} md={8} sm={12} xs={12}>
            <Box sx={{ width: '100%', }}>
              <Box sx={{ overflow: 'hidden', width: '100%', height: '700px', borderRadius: '12px' }}>
                <YouTube videoId={id} opts={{ width: '100%', height: ' 700px' }} style={{}} />
              </Box>
              <Typography color="#000" pt={2} variant="h5" fontWeight="bold" fontSize='20px' >
                {title}
              </Typography>
              <Stack direction={'row'} justifyContent={"space-between"} sx={{ color: '#000' }} py={1}  >
                <Link to={`/channel/${channelId}`} style={{ textDecoration: "none", display: 'flex' }}  >
                  <Box>
                    <Avatar alt="Remy Sharp" src={!thumbnails ? "/broken-image.jpg" : thumbnails.high.url} sx={{ width: 35, height: 35 }} />
                  </Box>
                  <Typography variant="p" fontSize={"15px"} fontWeight='600' py={1} px={2} color='#000'>
                    {channelTitle}
                  </Typography>
                </Link>
                <Stack direction={'row'} gap={'20px'} alignItems="center" >
                  <Typography variant='body1' sx={{ opacity: 0.7 }} >
                    {nFormatter(viewCount)} view
                  </Typography>
                  <Typography variant='body1' sx={{ opacity: 0.7 }} >
                    {nFormatter(likeCount)} like
                  </Typography>
                </Stack>
              </Stack>
            </Box>

          </Grid>
          <Grid item xl={3} md={4} sm={12} xs={12}>
            <Grid container direction={'column'}>

              <Sidevideo />

            </Grid>
          </Grid>
          </>
        }
        </Grid>

    </>
  )
}
