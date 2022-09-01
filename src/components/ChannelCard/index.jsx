import { CheckCircle } from '@mui/icons-material';
import {Box, Car, CardContent, CardMedia, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import { demoProfilePicture } from '../../utils/constants';

export default function ChannelCard({channelDetail, marginTop}) {
  return (
	 <Box sx={{boxShadow:"none",
   borderRadius:"20px", 
	display:"flex",
	justifyContent:"center",
	alignItems:'center',
	width:{xs:"356px", md:"320px"},
	height:"356px",
	margin:"auto",
	marginTop}}>
  <Link to={`/channel/${channelDetail?.id?.channelId}`}>
   <CardContent sx={{display:"flex",
   flexDirection:"column",
   justifyContent:"center",
   textAlign:"center",
	color:"white"}}>
<CardMedia
	image={channelDetail?.snippet?.thumbnails?.higt?.url || demoProfilePicture}
	alt={channelDetail?.snippet?.title}
	sx={{borderRadius:"50%", height:"180px", width:"180px", mb:2, border:"1px solid #e3e3e3"}}
/>
<Typography variant='h6'>
{channelDetail?.snippet?.title}
<CheckCircle sx={{fontSize:16, color:"gray", ml:"5px"}}/>
{channelDetail?.statistics?.subscriberCount && (
	<Typography>Subscribers {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} 
	</Typography>
)}
</Typography>
   </CardContent>
  </Link>
   </Box>
  )
}
