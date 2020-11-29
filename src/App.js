import React, {useState,useEffect} from 'react';
import './App.css';
import './youtube.css';

import axios from 'axios';
// import api, { baseParams } from './services/Api'; 

// Bootstrap components imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Custom component imports
import HeaderNav from './Components/Navbar/Navbar';
import VideoPlayer from './Components/Videos/VideoPlayer';
// import VideoItem from './Components/Videos/VideoItem';
import VideoList from './Components/Videos/VideoList';

const App = () => {

  let defaultSearch = ['Trending Technologies','technology','Vlogs','News','trending music','Trending Netflix Web series','computer science','New Mobiles Launched',
                          'ISRO Innovation News','Corona News','Augmented Reality', 'Sports News','Javascript','Redux','NodeJS repl'];
  let index = Math.floor(Math.random()*15);
  console.log('index is :- ',index)

  const [userSearch,setUserSearch] = useState(defaultSearch[index]);
  const [video,setVideo] = useState({
    videos: [],
    selectedVideo: null,
  });

// Search
 useEffect(()=>{
   const searchYoutube = async () => {
     const response =  await axios.get("https://www.googleapis.com/youtube/v3/search",{
       params: {
         q: userSearch ,
         part: "snippet",
          maxResults: 10,
          key: 'AIzaSyCWCJF-V662We_L5TocEM8KTAcLi58psIA',
       }
     });
     await setVideo({ videos : response.data.items,
                        selectedVideo: response.data.items[0]});

     console.log(response.data);
    //  console.log(response.data.items[0].id.videoId);
   }
  searchYoutube();

 },[userSearch]);

 useEffect(() => { console.log(video.videos); },[video.videos])

 const onVideoSelect = async (video) => {
    await setVideo({selectedVideo: video});
 }


  return (
    <Container fluid>
      {/* Header or Navbar */}
      <Row>
        <Col> <HeaderNav setUserSearch={setUserSearch} /></Col>
      </Row>

      <Row>
      {/* Video Player Section */}
        <Col xs={12} sm={12} md={8} >
            <VideoPlayer selectedVideo={video.selectedVideo} />
            {/* <VideoPlayerDetails /> */}

        </Col>

        {/* Videos list on side */}
        <Col xs={12} sm={12} md={4}>
          <VideoList videoInfo={video.videos} onVideoSelect={onVideoSelect} />
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;




// <div className="App"></div>



// const [data,setData] = useState([]);

// useEffect( () => {
//   window.fetch('https://gnews.io/api/v4/search?q=corona&token=ea05a8e34e24685378756f99067ac968&lang=en')
//   .then( response => response.json())
//   .then( data => {
//     setData(data.articles);
//     // console.log(data);
//   } )
//   .catch(err => console.log('error !',err));
// }, []);
// console.log(data);
// console.log(data[0].title);

//  const totalData = data.articles.map( val => val );