import React , {useEffect, useState}from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY} from '../../Config';
import MainImage from './Sections/MainImage';

function LandingPage() {

    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)

    useEffect(() => {
        // 가장 인기 많은 영화 리스트 1페이지에 20씩 로딩
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetch(endpoint).then(response => response.json()).then(response => {
            setMovies([response.results])
            setMainMovieImage(response.results[0])
        })

    },[])

    return (
        <div style={{ width: '100%', margin: '0'}}>
            {/* Main Image */}
            <MainImage image={``} />
           <div style={{width:'85%', margin: '1rem auto'}}>
            <h2>Movies by latest</h2>
            <hr/>
            {/* Movie Grid Cards */}

           </div>
           <div style={{display:'flex', justifyContent:'center'}}>
            <button>더 보기</button>
           </div>
           
           </div>
        
    )
}

export default LandingPage
