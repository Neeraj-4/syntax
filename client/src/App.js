import React, { lazy, Suspense } from 'react'
import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getArtists, getLatestSongs, getAlbums,getCategory,getRomanticSongs } from './redux/action/ProductActions'
import { getPartySongs } from './redux/action/ProductActions'
import { saveAs } from 'file-saver';
import { shuffle } from 'lodash';
const Navbar = lazy(() => import('./components/Navbar/Navbar'))
const Home = lazy(() => import('./components/Pages/Home/Home'))
const Loading = lazy(()=>import('./Loading/Loading'))
const Artist = lazy(() => import('./components/Pages/Artist/Artist'))
const Category = lazy(() => import('./components/Pages/Category/Category'))
const Player = lazy(() => import('./components/Player/Player'))
const Searchdata = lazy(() => import('./components/Pages/Search/Searchdata'))
const Album = lazy(() => import('./components/FooterCompo/Album/Albums'))
const PlayList = lazy(() => import('./components/FooterCompo/AlbumPlayList/PlayList'))
const Footer = lazy(() => import('./Footer/Footer'))
const DetailPlayList = lazy(() => import('./components/Pages/DetailPlayList/DetailPlayList'))
const PartyPlayList = lazy(() => import('./components/Pages/PartyPlayList/PartyPlayList'))
const RomanticPlaylist = lazy(()=>import('./components/Pages/RomanticPlaylist/RomanticPlaylist'))
const CategoryRoute = lazy(()=>import('./components/CategoryComponent/CategoryRoute'))
const NotFound = lazy(() => import('./components/Pages/NotFound/NotFound'))
const Wrapper = styled(Box)`
overflow: hidden;
padding: 50px 0;
`
const App = ({ theme, isPlaying ,setIsPlaying,currentSongColor}) => {
  const [windowDemansion, setWindowDemansion] = useState(null);
  const [playerVisible, setPlayerVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [songList, setSongList] = useState();
  const [selectedSong,setSelectedSong] = useState(null);
  const [loading, setLoading] = useState(false);
  //if anything happen in player then just add '[]'this  in songList useState//
  const colors = ["#A2DA1A", "#1ADAB4", "#1A73DA", "#4022DA", "#8122DA", "#C522DA", "#DA2273"];
  const [color, setColor] = useState(null);
  const { romantic_songs } = useSelector(state => state.getRomanticSongs);
  const { AllArtist } = useSelector(state => state.getArtists);
  const { AllAlbums } = useSelector(state => state.getAlbums);
  const { Latest_songs } = useSelector(state => state.getLatestSongs);
  const { party_songs } = useSelector(state => state.getPartySongs);
  const {CategoryItems} =useSelector(state => state.getCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtists())
    dispatch(getAlbums())
    dispatch(getLatestSongs())
    dispatch(getPartySongs())
    dispatch(getRomanticSongs())
    dispatch(getCategory())

      .then(() => setLoading(true));
  }, [dispatch]);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  })
  useEffect(() => {
    setWindowDemansion(window.innerWidth);

  }, []);
  useEffect(() => {
    function handleResize() {
      setWindowDemansion(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, []);
  const isMobile = windowDemansion <= 550;
  const handleData = (Song, index, newSongList) => {
    setSongList(newSongList);
    setCurrentIndex(index);
    setPlayerVisible(true);
   setSelectedSong(Song);
 
  };

  const handleDownload = (file, fileName) => {
    fetch(file)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, fileName));
  }
  const handlePlayAll = (playlist) => {
    setSongList(playlist);
    setPlayerVisible(true);
  }

  return (
    <Box>
      {loading ?
        (
          <Box className={`${theme}`}>
            <Suspense fallback={<Loading />}><Navbar isMobile={isMobile} /></Suspense>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Suspense fallback={<Loading />}><Home Latest_songs={Latest_songs} party_songs={party_songs} romantic_songs={romantic_songs} isMobile={isMobile} AllArtist={AllArtist} handleData={handleData} /></Suspense>} />
                <Route path="/Category" element={<Suspense fallback={<Loading />}><Category isMobile={isMobile} CategoryItems={CategoryItems} /></Suspense>} />
                <Route path='/Search' element={<Suspense fallback={<Loading />}><Searchdata  AllArtist={AllArtist} Latest_songs={Latest_songs} party_songs={party_songs} handleData={handleData} handleDownload={handleDownload} /></Suspense>} />
                <Route path='/artist/:id' element={<Suspense fallback={<Loading />}> <Artist AllArtist={AllArtist} isMobile={isMobile} selectedSong={selectedSong} color={color} isPlaying={isPlaying} setIsPlaying={setIsPlaying} colors={colors} handleData={handleData} handlePlayAll={handlePlayAll}  handleDownload={handleDownload} /></Suspense>} />
                <Route path='/album/:id' element={<Suspense fallback={<Loading />}><Album AllAlbums={AllAlbums} /></Suspense>} />
                <Route path='/:id/playlist' element={<Suspense fallback={<Loading />}><PlayList AllAlbums={AllAlbums} isMobile ={isMobile}color={color}selectedSong={selectedSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} handleData={handleData} handlePlayAll={handlePlayAll} handleDownload={handleDownload} /></Suspense>} />
                <Route path='/:id/songs' element={<Suspense fallback={<Loading />}><DetailPlayList Latest_songs={Latest_songs} selectedSong={selectedSong} color={color} isMobile={isMobile} colors={colors}  isPlaying={isPlaying} handleData={handleData} handlePlayAll={handlePlayAll}handleDownload={handleDownload} /></Suspense>} />
                <Route path='/:id/Partysongs' element={<Suspense fallback={<Loading />}><PartyPlayList party_songs={party_songs}selectedSong={selectedSong} color={color} isMobile={isMobile} colors={colors}  isPlaying={isPlaying} handleData={handleData} handlePlayAll={handlePlayAll} handleDownload={handleDownload} /></Suspense>} />
                <Route path='/romantic playlist/:id' element={<Suspense fallback={<Loading />}><RomanticPlaylist romantic_songs={romantic_songs} currentSongColor={currentSongColor} selectedSong={selectedSong} color={color} isMobile={isMobile} colors={colors}  isPlaying={isPlaying} handleData={handleData} handlePlayAll={handlePlayAll} handleDownload={handleDownload} /></Suspense>} />
                <Route path='/category/:id' element={<Suspense fallback={<Loading />}><CategoryRoute CategoryItems={CategoryItems} handleData={handleData} handleDownload={handleDownload} /></Suspense>} />
                <Route path="*" element={<Suspense fallback={<Loading />}><NotFound /></Suspense>} />
              </Routes>
            </Wrapper>
            <Suspense fallback={<Loading />}>
              {playerVisible ? <Player currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}
                songList={songList} selectedSon={selectedSong}  handleDownload={handleDownload} /> : null}
            </Suspense>

            <Suspense fallback={<Loading />}>
              <Footer isMobile={isMobile} AllArtist={AllArtist} AllAlbums={AllAlbums} />
            </Suspense>
          </Box>
        )
        :
        (<Loading />)}
    </Box>

  )
}

export default App
