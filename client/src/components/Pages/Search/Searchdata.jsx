import React from 'react'
import { useLocation } from 'react-router-dom';
import { Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
const Component = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: auto;
`
const Heading = styled(Typography)`
display: flex;
flex-wrap: wrap;
margin-left: 20px;
font-weight: 600;
letter-spacing: .14ch;
word-spacing: .3ch;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
margin-bottom: 10px;
`
const Wrap = styled(Box)`
display: flex;
flex-wrap: wrap;
gap: 10px;
justify-content: flex-start;
align-items: center;
padding: 10px ;
`
const Containers = styled(Box)`
    padding: 5px 10px;
    text-align: start;
    margin-bottom: 5px;
    cursor: pointer;
`
const Container = styled(Link)`
    padding: 5px 10px;
    text-align: start;
    margin-bottom: 5px;
    color: inherit;
    text-decoration: none;
   cursor: pointer;
`
const Text = styled(Typography)`
font-size: 12px;
font-weight: 600;
`
const Items = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
`
const Wrapper = styled(Box)`
padding: 10px;
display: flex;
gap: 5px;
`
const TextWrap = styled(Box)`
margin-top: 5px;
display: flex;
flex-direction: column;
white-space: nowrap;
gap: 5px;
text-overflow: ellipsis;
overflow: hidden;
max-width: 120px;
`
const Error = styled(Box)`
width: 100%;
height: 20vh;
margin-top: 10px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
text-align: center;
justify-content: center;
align-items: center;
gap: 5px;
`
const ErrorMessage = styled(Typography)`
font-size: 18px;
`

const Searchdata = ({ Latest_songs,party_songs,AllArtist, handleData,handleDownload }) => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('query');
  const filterSong = Latest_songs.concat(party_songs);
  const filteredData = filterSong.filter((song) => song.id.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredArtist = AllArtist.filter((Artist) => Artist.id.toLowerCase().includes(searchTerm.toLowerCase())); 
  const search = Latest_songs.concat(AllArtist).concat(party_songs);
  const filterSearch = search.flatMap(album => album.playlist);
  const Searching = filterSearch.filter((song) => song.id.toLowerCase().includes(searchTerm.toLowerCase())); 

return (
    <Component>
      <Heading variant='h6'>Search Result for "{searchTerm}"</Heading>
      <Wrap>
      {Searching.map((song,index)=>(
         <Containers key={song._id}>
         <Box>
         <img src={song.url} alt={song.title} 
         onClick={()=>handleData(song,index,Searching)}
         style={{ maxWidth: 160,height:160,objectFit:'contain' }} />
         <Items>
             <TextWrap>
                 <Text variant='p'>{song.title}</Text>
                  <Text variant='p' style={{ fontSize: 10 }}>{song.artist}</Text> 
             </TextWrap>
             <Wrapper>
                 <FileDownloadOutlinedIcon style={{ fontSize: 24 }} onClick={()=>handleDownload(song.file,song.title)} />
             </Wrapper>
         </Items>
         </Box>
     </Containers>
      ))}
        {filteredArtist.map((artist) => (
          <Container to={`/artist/${artist.id}`} key={artist.id}>
            <img src={artist.url} alt={artist.id} style={{ maxWidth: 160, height: 160 }}/>
              <TextWrap>
                <Text variant='p'>{artist.id}</Text>
              </TextWrap>
          </Container>
        ))}   

        {filteredData.map((album)=>(
          <Container to={`/${album.id}/songs`} key={album.id}>
          <img src={album.url} alt={album.id} style={{ maxWidth: 160, height: 160 }}/>
          <Items>
            <TextWrap>
              <Text variant='p'>{album.id}</Text>
            </TextWrap>
          </Items>
        </Container>
        ))}

         {(filteredData.length === 0 && filteredArtist.length === 0 && Searching.length === 0) 
         &&
         (
         <Error>
         <Typography variant='h5'>Search Not Found</Typography>
          <ErrorMessage variant='p'>If you want "{searchTerm}" song you can send us a wish by clicking on wish button </ErrorMessage>
          </Error> 
         )
         }
      </Wrap>
    </Component>
  )
}

export default Searchdata;
