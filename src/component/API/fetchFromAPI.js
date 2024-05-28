import React,{ useState }  from 'react';
import axios from 'axios';

export default function fetchFromAPI(){
  const [data ,setData] = useState([])
  
  const getData = async (url)=>{
    const BASE_URL = `https://youtube.googleapis.com/youtube/v3/`;
    // const API_KEY = `AIzaSyCH2g1YbyTWb45ZrU_cLLtSrcVrO2pkQQo`;
    // const API_KEY = `AIzaSyBkt9eteKkCb5jBSm6NnLnuSXd04KazbD0`;
    // const API_KEY = `AIzaSyA28o1Is7To03i2jcwFwXS2a-IQn2um2BA`;
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    // const API_KEY = `AIzaSyA0tif98M74ROqAEp20Okj-pqKnVnlaF9k`;
    // const API_KEY = `AIzaSyAVv9DM2pSP88v4mBlrfpwxmMzxSKM3bW4`;
    
    try {
      // const response = await axios.get(`${BASE_URL}search?part=snippet&maxResults=50&q=surfing&key=${API_KEY}`)
      const response = await axios.get(`${BASE_URL}${url}`,{params:{maxResults: 50,key: API_KEY,}})
      // setData(response.data.items)
      setData(response.data)
      // console.log(data)
      // setPage(response)
    } catch (error) {
      console.log("this is a error ",error)
    }

  }
  return { data,setData,getData}
}