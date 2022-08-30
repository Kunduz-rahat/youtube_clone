import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import {Box} from '@mui/material';
import VideoDetail from './pages/VideoDetail';
import ChannelDetail from './pages/ChannelDetail';
import Search from './pages/Search';

function App() {
  return (
  <BrowserRouter>
  <Box sx={{backgroundColor:"#000"}}>
  <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/video/:id' element={<VideoDetail/>}/>
      <Route path='/channel/:id' element={<ChannelDetail/>}/>
      <Route path='/search/:searchTeam' element={<Search/>}/>
    </Routes>
  </Box>
    
  </BrowserRouter>
  );
}

export default App;
