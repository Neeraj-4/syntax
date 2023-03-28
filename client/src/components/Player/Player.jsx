import { Box, styled, Typography } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Component = styled(Box)`
position: fixed;
top: auto;
z-index:2;
width: 100%;
background:rgb(73, 162, 221);
overflow: hidden;
&>img{
       object-fit: contain;
       height: 50px;
    }
@media screen and (max-width: 600px) {
bottom: 60px;
height: 65px;
display: flex;
   }
@media screen  and (min-width: 1200px) {
 bottom: 0;
 height: 70px;
 display: flex;
 align-items: center;
 padding: 0 20px;
}
@media screen and (min-width: 550px) and (max-width: 1199px) {
 bottom: 0;
 height: 70px;
 display: flex;
 align-items: center;
 padding: 0 20px;
}
`
const Container = styled(Box)`
@media screen and (max-width: 600px) {
display: flex;
flex-direction: column;
}
`
const Wrap = styled(Box)`
display: flex;
align-items: center;
margin-top:10px;
padding: 0 10px;
overflow: hidden;
`
const ImageWrapper = styled(Box)`
display: flex;
align-items: center;
gap: 10px;
max-width: 40%;
min-width: 20%;
&>img{
    object-fit: contain;
    height: 40px;   
} 
`
const TextWrap = styled(Box)`
display: flex;
flex-direction: column;
width: 150px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`
const ActionButton = styled(Box)`
margin-left: 27px;
@media screen and (min-width: 1200px) {
margin-left: 0;
width:60%;
display: flex;
justify-content: center;
}
@media screen and (min-width: 550px) and (max-width: 1199px) {
width:60%;
display: flex;
justify-content: center;
}
`
const Button = styled(Box)`
display: flex;
gap: 15px;
`
const Menu = styled(Box)`
    margin-left: 30px;

`
const DownloadWrapper = styled(Box)`
max-width: 100px;
height: auto;
position: fixed;
top: auto;
right: 15px;
bottom: 125px;
padding: 5px 10px;
z-index: 2;
background: black;
border: 1px solid black;
border-radius: 10px;
@media screen and (min-width: 1200px) {
bottom: 55px;
right: 130px;
}
`
const Download = styled(Typography)`
display:flex;
gap:5px;
justify-content: center;
align-items: center;
color: gray;
`
const Range = styled(Box)`
display: flex;
justify-content: center;
align-items: center;
padding: 4px;
width: 97vw;
gap: 5px;
&>div{
    font-size: 10px;
}
&>input{
    width: 100%;
  height: 3px;
  border-radius: 5px;
  background: #ddd;

}
@media screen and (min-width: 1200px) {
width: 95vw;
}
`

const Player = ({ currentIndex, setCurrentIndex, songList, handleDownload }) => {
    const audioRef = useRef(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState([songList[currentIndex]]);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setCurrentSong([songList[currentIndex]]);
        if (audioRef.current.pause) {
            handlePlay();
        }
        else{
            handlePause();
        }
    }, [currentIndex, songList]);

    useEffect(() => {
        audioRef.current.addEventListener("ended", handleNext);
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    });

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleSeekChange = (e) => {
        audioRef.current.currentTime = (e.target.value * duration) / 100;
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    const progress = (isNaN(currentTime) || isNaN(duration) || duration === 0)
        ? 0
        : (currentTime / duration) * 100;

    const handlePlay = () => {
        setIsPlaying(true);
        audioRef.current.play();
    }

    const handlePause = () => {
        setIsPlaying(false);
        audioRef.current.pause();
    }
 
    const handleNext = () => {
        if (currentIndex === songList.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
        setCurrentSong([songList[currentIndex]]);

    }
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setCurrentSong([songList[currentIndex - 1]]);
        } else {
            setCurrentIndex(songList.length - 1);
            setCurrentSong([songList[songList.length - 1]]);
        }
    }
    return (
        <>
            <Box>
                {currentSong.map((song) => (
                    <Component key={song.id}>
                        <Container>
                            <Wrap>
                                <ImageWrapper>
                                    <img src={song.url} alt={song.title} />
                                    <TextWrap>
                                        <Typography variant='p'>{song.title}</Typography>
                                        <Typography variant='p' style={{ fontSize: 10 }}>{song.artist}</Typography>
                                    </TextWrap>
                                </ImageWrapper>
                                <ActionButton>
                                    <Button>
                                        <SkipPreviousIcon style={{ fontSize: 35 }} onClick={handlePrevious} />
                                        <Box>
                                            {isPlaying ? <PauseCircleIcon style={{ fontSize: 35 }}  onClick={handlePause}  /> : <PlayCircleIcon style={{ fontSize: 35 }}  onClick={() => handlePlay()}  />}
                                        </Box>
                                        <SkipNextIcon style={{ fontSize: 35 }} onClick={handleNext} />
                                    </Button>
                                </ActionButton>
                                <Box>
                                    <Menu>
                                        <MoreVertIcon onClick={() => setOpen(!open)} />
                                    </Menu>
                                    {open &&
                                        (<DownloadWrapper onClick={() => handleDownload(song.file, song.title)}>
                                            <Download variant='p'>Download<FileDownloadOutlinedIcon style={{fontSize:18}}/></Download>
                                        </DownloadWrapper>)}
                                </Box>
                            </Wrap>
                            <Range>
                                <Box>{formatTime(currentTime)}</Box>
                                <input type="range"
                                    min={0}
                                    max={100}
                                    value={progress}
                                    onChange={handleSeekChange}
                                />
                                <Box>{formatTime(duration)}</Box>
                            </Range>
                        </Container>
                        <audio ref={audioRef} src={song.file} autoPlay={isPlaying}
                            onLoadedData={() => setDuration(audioRef.current.duration)}
                            onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                        />
                    </Component>
                ))}
            </Box>
        </>
    )
}
export default Player
