
import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LyricsIcon from '@mui/icons-material/Lyrics';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
const ContainerWrapper = styled(Box)`
  width: 100%;
  overflow: hidden;
`
const Component = styled(Box)`
  width: 100%;
  overflow: hidden;
`
const Wrap = styled(Box)`
  &>ul{
    margin-top: 10px;
    padding: 5px 10px;
    display:flex;
    flex-direction:column;
    gap:20px;
    list-style-type:none;
  }
`
const Banner = styled(Box)`
display: flex;
&>img{
  margin-top: 10px;
  width: 100%;
 max-height:250px;
object-fit: contain;
}
`
const ButtonBack = styled(ArrowBackIosNewIcon)`
position: absolute;
z-index: 4;
font-weight: bolder;
margin-top: 15px;
margin-left: 10px;
background: gray;
padding: 3px;
border-radius: 50px;
`
const BannerWrapper = styled(Box)`
position: absolute;
top: 240px;
bottom: auto;
display: flex;
gap: 25px;
justify-content: space-between;
align-items: center;
padding: 0 10px;
`
const ArtistName = styled(Typography)`
letter-spacing:.4ch;
padding: 3px 10px;
border-radius: 50px;
background-color: gray;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const PlayList = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`
const TextWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`
const Text = styled(Typography)`
font-weight: 800;
text-transform: capitalize;
`
const SubTextWrapper = styled(Box)` 
  display: flex;
  align-items: center;
  gap: 3px;
`
const SubText = styled(Typography)`
  max-width: 150px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`
const ResponsiveBannerTab = styled(Box)`
width: 100%;
min-height: 270px;
position: relative;
`
const Wrapper = styled(Box)`
position: absolute;
top: 70px;
bottom: auto;
display: flex;
align-items: center;
gap:40px;
&>img{
  height:230px;
  margin-left: 50px;
  border-radius: 20px;
  object-fit: contain;
}
`
const ResponsiveArtistWrapper = styled(Box)`
position: relative;
display: flex;
align-items: flex-start;
flex-direction: column;
gap: 15px;
`
const ResponsiveArtisNametWrapper = styled(Box)`
font-size: 30px;
letter-spacing:.3ch;
padding: 3px 0;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const Count = styled(Typography)`
letter-spacing: .3ch;
font-size: 22px;
`
const TCell = styled(TableCell)`
font-weight:600;
color: gray;
`
const PlayAll = styled(PlayCircleIcon)`
color:aqua;
font-size:50px;
`
const Pause = styled(PauseCircleIcon)`
color:aqua;
font-size:50px;
`
const ImageWrapper = styled(Box)`
display: flex;
justify-content: start;
align-items: center;
color: gray;
gap:10px;
cursor: pointer;
`
const DetailPlayList = ({Latest_songs,isMobile,isPlaying,selectedSong, color,handleData,handleDownload,handlePlayAll}) => {
 const [total,setTotal]=useState(null);
 const navigate = useNavigate();
  const { id } = useParams();
  const Filteralbum = Latest_songs.filter(album => album.id === id);

  useEffect(() => {
    if (Filteralbum.length > 0) {
      setTotal(Filteralbum[0].playlist.length);
    }
  }, [Filteralbum]);

  return (
    <ContainerWrapper>
      {isMobile ?
        <Component>
          {Filteralbum.map(album => (
            <Wrap key={album.id}>
              <Banner>
                <ButtonBack onClick={()=>navigate(-1)}/>
                <img src={album.url} alt={album.url} />
              </Banner>
              <Box>
                <BannerWrapper>
                  <ArtistName variant="h5">{album.id}</ArtistName>
                  <Box>
                    {isPlaying ? <Pause/> : <PlayAll onClick={()=>handlePlayAll(album.playlist)} />}
                  </Box>
                </BannerWrapper>
              </Box>
              <ul>
                <Typography variant="h6"fontWeight="bold">Songs({total})</Typography>
                {album.playlist.map((song,index) => (
                  <li key={song.id}>
                    <PlayList>
                      <Box style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:10 }} onClick={()=>handleData(song,index,album.playlist)}>
                    <Typography variant='h5'style={{fontSize:18}} >{index+1}</Typography>
                      <img src={song.url} alt={song.title} style={{ width: 60, height: 50 }} />
                      <TextWrapper>
                        <Text variant='p'style={{color: selectedSong === song ? '#3FB5E2' : 'inherit'}}>{song.title}</Text>
                        <SubTextWrapper>
                          <LyricsIcon style={{ fontSize:14,marginTop:4 }} />
                          <SubText variant='p'>{song.artist}</SubText>
                        </SubTextWrapper>
                      </TextWrapper>
                      </Box>
                      <Box>
                        <FileDownloadOutlinedIcon onClick={()=>handleDownload(song.file,song.title)} style={{padding:"0 5"}}/>
                      </Box>
                    </PlayList>
                  </li>
                ))}
              </ul>
            </Wrap>
          ))}
        </Component>
        :
        <Component>
          {Filteralbum.map(album => (
            <Wrap key={album.id}>
              <ResponsiveBannerTab style={{ background: `${color}` }}></ResponsiveBannerTab>
              <Wrapper>
                <img src={album.url} alt={album.url} />
                <ResponsiveArtistWrapper>
                  <ResponsiveArtisNametWrapper variant="p">{album.id}</ResponsiveArtisNametWrapper>
                  <Count variant="p">Songs({total})</Count>
                  <Box>
                    {isPlaying ? <Pause/> : <PlayAll onClick={()=>handlePlayAll(album.playlist)} />}
                  </Box>
                </ResponsiveArtistWrapper>
              </Wrapper>
              <TableContainer component={Paper} style={{background:"inherit"}}>
                <Table sx={{ minWidth: 480}} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TCell align='center'></TCell>
                      <TCell>Track</TCell>
                      <TCell align='center'>Artist</TCell>
                      <TCell align='center'>Duration</TCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {album.playlist.map((song, index) => (
                      <TableRow key={song.id} align='center'md={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row" align='center'style={{color:"gray"}}>{index + 1}</TableCell>
                        <TableCell>
                          <ImageWrapper
                           onClick={()=>handleData(song,index,album.playlist)}>
                          <img src={song.url} alt={song.title} style={{ width: 50 }} />
                          <Typography variant='p' style={{color: selectedSong === song ? '#3FB5E2' : 'inherit'}}>{song.title}</Typography>
                          </ImageWrapper>
                        </TableCell>
                        <TableCell align='center'style={{color:"gray"}}><Typography variant='p'>{song.artist}</Typography></TableCell>
                        <TableCell align='center'style={{color:"gray"}}><Typography variant='p'>{song.duration}</Typography></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Wrap>
          ))}
        </Component>
      }
    </ContainerWrapper>
  )
}

export default DetailPlayList
