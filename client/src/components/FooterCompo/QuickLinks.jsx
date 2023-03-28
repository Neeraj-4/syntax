import { Box, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

const Component = styled(Box)`
  padding: 0 10px;
  margin-top: 30px;
  
`
const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
 gap: 20px;
`
const TextStyle = styled(Box)`
text-decoration: none;
border: 1px solid gray;
padding: 2px 7px;
`
const Links = styled(Link)`
text-decoration: none;
color: gray;

`
const StyleLink = styled(Link)`
color: gray;
text-decoration: none;
font-size: 14px;
text-align: start;
display: flex;
flex-direction: column;
gap: 5px;
`
const TextList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  padding: 7px 5px;
  gap: 15px;

`
const TextWrap = styled(Box)`
display: flex;
gap: 10px;
flex-direction: column;
`
const Heading = styled(Typography)`
font-size: 18px;
color: inherit;
`
const Headwrap = styled(Box)`
margin-bottom: 10px;
`
const AddIcons = styled(AddIcon)`
color: inherit;
`
export const Albums = ({ title, open, setOpen, isMobile ,AllAlbums}) => {
  

  return (

    <Component>
      {isMobile ?
        <Box>
          <Wrapper onClick={e => setOpen(!open)}>
            <Heading variant='p' style={{ marginLeft: 10 }}>{title}</Heading>
            <AddIcons/>
          </Wrapper>
          {open && (
            <TextList>
              {AllAlbums.map((albums) => (
                <TextStyle key={albums.id} >
                  <Links to={`/album/${albums.id}`} key={albums.id}>
                    <Box>{albums.id}</Box>
                  </Links>
                </TextStyle>
              ))}
            </TextList>

          )}
        </Box>
        :
        <Box>
          <Headwrap>
            <Heading variant='p'>{title}</Heading>
          </Headwrap>
          <TextWrap>
            {AllAlbums.map((albums) => (
              <Box key={albums.id}>
                <StyleLink to={`/album/${albums.id}`}>
                  <Box>{albums.id}</Box>
                </StyleLink>
              </Box>
            ))
            }
          </TextWrap>
        </Box>
      }
    </Component>
  )}
export const Artist = ({ title, open2, setOpen2, isMobile,AllArtist}) => {
  return (
    <Component>
      {isMobile ?
        <Box>
          <Wrapper onClick={e => setOpen2(!open2)}>
            <Heading variant='p' style={{ marginLeft: 10 }}>{title}</Heading>
            <AddIcons/>
          </Wrapper>
          {open2 && (
           <TextList>
           {AllArtist.map((artists) => (
             <TextStyle key={artists.id}>
               <Links to={`/artist/${artists.id}`} key={artists.id}>
                 <Box>{artists.id}</Box>
               </Links>
             </TextStyle>
           ))}
         </TextList>

          )}
        </Box>
        :
        <Box>
          <Headwrap>
            <Heading variant='p'>{title}</Heading>
          </Headwrap>
          <TextWrap>
          <TextWrap>
            {AllArtist.map((artists) => (
              <Box key={artists.id}>
                <StyleLink to={`/artist/${artists.id}`}>
                  <Box>{artists.id}</Box>
                </StyleLink>
              </Box>
            ))
            }
          </TextWrap>
          </TextWrap>

        </Box>


      }
    </Component>
  )
}


/* export const Genes = ({ title, open1, setOpen1, isMobile }) => {

  return (

    <Component>
      {isMobile ?
        <Box>
          <Wrapper onClick={e => setOpen1(!open1)}>
            <Heading variant='p' style={{ marginLeft: 10 }}>{title}</Heading>
            <AddIcons/>
          </Wrapper>
          {open1 && (
            <TextList>
            {Gene.map((gene) => (
              <TextStyle key={gene.id}>
                <Links to={`/Gene/${gene.label}`}>
                  <Box>{gene.label}</Box>
                </Links>
              </TextStyle>
            ))}
          </TextList>
          )}
        </Box>
        :
        <Box>
          <Headwrap>
            <Heading variant='p'>{title}</Heading>
          </Headwrap>
          <TextWrap>
          <TextWrap>
            {Gene.map((gene) => (
              <Box key={gene.id}>
                <StyleLink to={`/Gene/${gene.label}`}>
                  <Box>{gene.label}</Box>
                </StyleLink>
              </Box>
            ))
            }
          </TextWrap>
          </TextWrap>

        </Box>


      }
    </Component>
  )
}
 */



/* export const NewRelease = ({ title, open3, setOpen3, isMobile }) => {

  return (

    <Component>
      {isMobile ?
        <Box>
          <Wrapper onClick={e => setOpen3(!open3)}>
            <Heading variant='p'>{title}</Heading>
            <AddIcon style={{color:"white",marginRight:5}} />
          </Wrapper>
          {open3 && (
            <TextList>
           <Link to='/Album/Hindi'>Hindi</Link>
           <Link to='/Album/English'>English</Link>
           <Link to='/Album/Punjabi'>Punjabi</Link>
           <Link to='/Album/Telugu'>Telugu</Link>
           <Link to='/Album/Marthi'>Marthi</Link>
           <Link to='/Album/Malayalam'>Malayalam</Link>
            </TextList>
            
          )}
        </Box>
        :
        <Box>
          <Heading variant='p'>{title}</Heading>

          <TextWrap>
          <Link to='/Album/Hindi'>Hindi</Link>
           <Link to='/Album/English'>English</Link>
           <Link to='/Album/Punjabi'>Punjabi</Link>
           <Link to='/Album/Telugu'>Telugu</Link>
           <Link to='/Album/Marthi'>Marthi</Link>
           <Link to='/Album/Malayalam'>Malayalam</Link>
          </TextWrap>

        </Box>


      }
    </Component>
  )
}


export const OldSong = ({ title, open4, setOpen4, isMobile }) => {

  return (

    <Component>
      {isMobile ?
        <Box>
          <Wrapper onClick={e => setOpen4(!open4)}>
            <Heading variant='p'>{title}</Heading>
            <AddIcon />
          </Wrapper>
          {open4 && (
            <TextList>
             <Link to='/Album/Hindi'>Hindi</Link>
           <Link to='/Album/English'>English</Link>
           <Link to='/Album/Punjabi'>Punjabi</Link>
           <Link to='/Album/Telugu'>Telugu</Link>
           <Link to='/Album/Marthi'>Marthi</Link>
           <Link to='/Album/Malayalam'>Malayalam</Link>
            </TextList>
          )}
        </Box>
        :
        <Box>
          <Heading variant='p'>{title}</Heading>

          <Box>
          <Link to='/Album/Hindi'>Hindi</Link>
           <Link to='/Album/English'>English</Link>
           <Link to='/Album/Punjabi'>Punjabi</Link>
           <Link to='/Album/Telugu'>Telugu</Link>
           <Link to='/Album/Marthi'>Marthi</Link>
           <Link to='/Album/Malayalam'>Malayalam</Link>
          </Box>
        </Box>
      }
    </Component>
  )
} */