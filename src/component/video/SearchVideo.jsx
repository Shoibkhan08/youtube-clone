import React,{useEffect} from 'react'
import fetchFromAPI from '../API/fetchFromAPI';
import { useParams } from 'react-router-dom';
import Video from './Video';


export default function SearchVideo() {

  const {searchTerm} = useParams()
  const {data, getData } = fetchFromAPI()

  useEffect(() => {
    getData(`search?part=snippet&q=${searchTerm}`)
  }, [searchTerm])
  
  return (
    <>
    <Video data={data}/>
    </>
  )
}
