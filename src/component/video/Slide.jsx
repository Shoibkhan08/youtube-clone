import React,{ useEffect } from 'react';
import fetchFromAPI from '../API/fetchFromAPI'
import {useParams } from 'react-router-dom'
import Slidevideo from './Slidevideo';

export default function Sidevideo() {
    const { data, getData } = fetchFromAPI()
    const { id } = useParams()
    useEffect(() => {
        getData(`search?part=snippet&type=video&relatedTovideoId=${id}`)
    }, [id])
    const items = data.items
    const slideMemo = React.useMemo(()=>{
        return(
            <>
            {!items ? 'Loading...' :
            items.map((item,idx) => {
                return (
                    <Slidevideo data={item} key={idx} /> 
                )
            })
        }
            </>
        )
    },[items])
    return (
        <>
        {slideMemo}
            
        </>

    );
}
