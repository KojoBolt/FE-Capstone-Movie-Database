import React from 'react'
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';



 const MovieData = [
{
    title:"Home",
    icon: <LocalMoviesOutlinedIcon />,
    link: "/movielist.jsx"

},

{
    title:"Favorite",
    icon: <FavoriteBorderOutlinedIcon/>,
    link: "/favorite"

},

{
    title:"Trending",
    icon: <TrendingUpOutlinedIcon/>,
    link: "/trending"

},

{
    title:"Coming soon",
    icon: <DateRangeOutlinedIcon/>,
    link: "/coming-soon"

},

{
    title:"Forum",
    icon: <GroupOutlinedIcon/>,
    link: "/forum"

},

{
    title:"Social",
    icon: <MarkChatUnreadOutlinedIcon/>,
    link: "/social"

}, 

{
    title:"Settings",
    icon: <TuneOutlinedIcon/>,
    link: "/settings"

}
]

export default MovieData