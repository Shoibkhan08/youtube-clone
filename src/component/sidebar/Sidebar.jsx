import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, List, CssBaseline, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer'
import Navbar from '../header/Navbar';
import HomeIcon from '@mui/icons-material/Home';
import { Link, Outlet, useLocation, useParams, useNavigate } from 'react-router-dom'
import Videodetail from '../video/Videodetail';
import SearchVideo from '../video/SearchVideo';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Video from '../video/Video';
import fetchFromAPI from '../API/fetchFromAPI';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    top: "65px",
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    top: '65px',
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: 0,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        margin: '100px 0 0 0',
        top: '100px',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const location = useLocation()
    const [open, setOpen] = useState(false);
    const { data, getData } = fetchFromAPI()
    const [category, setCategory] = useState('letest new video')
    const { id } = useParams()
    const [searchTerm, setSearch] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        getData(`search?part=snippet&q=${category}`)
    }, [category])
    const a = location.pathname
    const b = a.slice(8)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
        }
        setSearch('')
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const link = [
        { id: 1, name: "Home", Route: "/", icon: <HomeIcon />, },
        { id: 2, name: "Trending", Route: "/", icon: <WhatshotOutlinedIcon />, },
        { id: 3, name: "Music", Route: "/", icon: <MusicNoteOutlinedIcon />, },
        { id: 4, name: "Movies", Route: "/", icon: <MovieIcon />, },
        { id: 5, name: "Live", Route: "/", icon: <LiveTvIcon />, },
        { id: 6, name: "Gaming", Route: "/", icon: <SportsEsportsOutlinedIcon />, },
        { id: 7, name: "News", Route: "/", icon: <FeedOutlinedIcon />, },
        { id: 8, name: "Sports", Route: "/", icon: <EmojiEventsOutlinedIcon />, },
        { id: 9, name: "Learning", Route: "/", icon: <LightbulbIcon />, },
    ]
    
    return (
        <>
            <Navbar open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} searchTerm={searchTerm} handleSubmit={handleSubmit} setSearch={setSearch} />
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Drawer variant='permanent' open={open}>

                    <Divider />
                    <List>
                        {link.map((link) => (

                            <ListItem key={link.id} disablePadding sx={{ display: 'block' }}>
                                <Link to={link.Route} className='link' style={{ textDecoration: 'none', color: '#000' }}>
                                    <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={(() => setCategory(link.name))}>
                                        <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                            {link.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={link.name} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </Link>
                                <Divider />
                            </ListItem>
                        ))}
                    </List>


                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3, background: 'none' }}>
                    {location.pathname === "/" ? <Video data={data} /> : ""}
                    {location.pathname === `/video/${id}` ? <Videodetail /> : ""}
                    {location.pathname === `/search/${b}` ? <SearchVideo /> : ""}
                </Box>
            </Box>
            <Outlet />
        </>
    );
}