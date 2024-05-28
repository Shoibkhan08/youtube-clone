import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Grid ,Box ,AppBar ,Toolbar ,IconButton ,Typography ,Badge ,} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import logo from '../assets/youtube.svg';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    
    const {handleDrawerOpen,handleDrawerClose,open,handleSubmit,setSearch,searchTerm} = props
    
    return (
        <Box sx={{ flexGrow: 1,width:'100%',position:'sticky',top:'0',zIndex:999}}>
            <AppBar position="static" sx={{ background: '#fff', color: '#000', }}>
                <Toolbar>
                    <IconButton onClick={(()=> open === true ? handleDrawerClose() : handleDrawerOpen())} size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography  component="div" sx={{ display: { xs: 'none', sm: 'block' } }}> 
                        <Link to='/' style={{textDecoration:'none',color:'#000'}}>
                        <Grid item xl={1} sx={{display:'flex'}}>
                            <img style={{width:'40px'}} src={logo} alt="" /><h4 style={{padding:'10px 0',fontSize:'18px',letterSpacing:'-1px',display:'flex'}}>YouTube <sup style={{padding:'0 0 0 2px'}}><sup>CLONE</sup></sup></h4>
                        </Grid>  
                        </Link>
                         
                    </Typography>
                    <Grid component="form" onSubmit={handleSubmit}  container >
                        
                        <Grid item xl={5} md={8} sm={8} xs={10} sx={{ margin: '0 auto' ,display:'flex'}} >
                        {/* <Link to='video'> */}
                            <input onChange={((e)=> setSearch(e.target.value))} value={searchTerm} style={{width:'100%',border:'1px solid lightgrey',borderRight:'none',borderRadius:'20px 0 0 20px ',padding:'0 20px'}} 
                            placeholder='Search' size="small" type='search' />
                             <IconButton type='submit' style={{border:'1px solid lightgrey',borderRadius:'0 20px 20px 0 ',padding:'0 20px',color:'grey',background:'#F8F8F8'}}>
                                <SearchIcon />
                            </IconButton>  
                            <IconButton sx={{borderRadius:'100%',mx:'20px',background:'#F8F8F8',color:'#000'}}>
                                <MicIcon sx={{cursor:'pointer'}}/>
                            </IconButton>                         
                        {/* </Link>    */}
                        </Grid> 
                    </Grid>
                    
                </Toolbar>
            </AppBar>
        </Box>

    );
}