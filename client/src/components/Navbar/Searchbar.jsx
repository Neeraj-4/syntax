import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box,styled } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import ClearIcon from '@mui/icons-material/Clear';
const Form = styled('form')({
  width: "70%",
  display: "flex",
  position: "fixed",
  top: 55,
  left: "13%",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
})
const SearchWrappers = styled(Box)`
  width: 90%;
  min-width: 370px;
  height: 5vh;
  display: flex;
  align-items: center;
background: white;
  overflow: hidden;
  border: 2px solid rgb(73, 162, 221);
  border-radius: 5px;
  &>input{
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    caret-color:aqua;
    padding: 0 10px;
    font-size: 16px;
   overflow: hidden;
  }
`
const Clear = styled(ClearIcon)`
color: black;
padding: 0 5px;
font-size: 16px;
`
const Searchbar = () => {
  const [isSearch, setIsSearch] = useState('');
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/Search?query=${isSearch}`);
    setIsSearch('');
    setIsShow(false);
  };
  return (
    <>
      <Box>
        <Box>
          <SearchOutlined onClick={() => setIsShow(!isShow)} style={{ color: "black", fontSize: 28 }} />
        </Box>
        {isShow && (
          <Form onSubmit={handleSubmit}>
            <SearchWrappers>
              <input placeholder="search your favourite" type="text"
                value={isSearch} onChange={e => setIsSearch(e.target.value)} required/>
              <Clear onClick={()=>setIsSearch('')}/>
            </SearchWrappers>
          </Form>
        )}
      </Box>     
    </>
  )
}
export default Searchbar
