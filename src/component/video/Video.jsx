import React from 'react';
import Videocard from './Videocard'
import { Grid,Container } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner'
export default function Video({ data: { items } }) {
  const loader = <Container  sx={{display:'flex', placeItems:'center',justifyContent:'center'}} > <ThreeDots
    visible={true}
    height="80"
    width="80"
    color="red"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""

  /> <h2> Loading...</h2> </Container>
  
  const videoMemo = React.useMemo(() => {
    return (
      <>
      {}
        <Grid container sx={{minHeight:'90vh'}} spacing={2}>
          
          {!items ? loader :items.map((item, idx) => (
            <Grid item xl={2} md={3} sm={6} xs={12} key={idx}>
              {<Videocard data={item} />}
            </Grid>
          ))}
        </Grid>
      </>
    )
  }, [items])

  return (
    <>
      {videoMemo}

    </>
  )
}
