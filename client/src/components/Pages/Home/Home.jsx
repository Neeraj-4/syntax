import React from 'react'
import Artists from '../Artists/Artists'
import { Box, styled } from '@mui/material'
import Slider from '../../Campo/Slider/Slider'
import SadSong from '../../Campo/SadSong/SadSong'
import OldSongs from '../../Campo/OldSongs/OldSongs'
import PartySong from '../../Campo/PartySong/PartySong'
import RomanticSong from '../../Campo/RomanticSong/RomanticSong'
const Component = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    &>div::-webkit-scrollbar{
    overflow: hidden;
    width: 0;
    }
`
const Home = ({AllArtist,Latest_songs,party_songs,romantic_songs,handleData,isMobile}) => {
    

    return (
        <Component>
           <Artists AllArtist={AllArtist}/>
            <Slider  Latest_songs={Latest_songs} isMobile={isMobile} />
            <PartySong party_songs={party_songs} title="Party Songs" handleData={handleData}/>
            <RomanticSong romantic_songs={romantic_songs} title="Romantic Songs"  handleData={handleData}/>
            <SadSong Latest_songs={Latest_songs} title="Hindi Album Songs" handleData={handleData}/>
        </Component>
    )
}

export default Home
