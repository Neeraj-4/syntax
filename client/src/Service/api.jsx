import axios from 'axios';

const URL = 'http://localhost:8000';
export const Authantication = async(data)=>{
try {
     return await axios.post(`${URL}/wish`,data)
} catch (error) {
    console.log('Error on callling API',error);
}
}
