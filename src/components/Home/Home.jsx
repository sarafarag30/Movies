import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Home() {

  let imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const [trendingMovies , setTrendingMovies] = useState([]);
  const [trendingTvshows , setTrendingTvshows] = useState([]);
  const [trendingPeople , setTrendingPeople] = useState([]);

  async function getTrendingItems(mediaType , callback){
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=fd36a067c8cf1b25fbb5be47f6909d9c`);
    callback(data.results.slice(0,10));
  };

  useEffect(()=>{
    getTrendingItems('movie',setTrendingMovies);
    getTrendingItems('tv',setTrendingTvshows);
    getTrendingItems('person',setTrendingPeople);
  },[]);
  return (
    <>
    <div className='row my-5'>
      <div className='col-md-4'>
        <div>
          <div className='brdr w-25'></div>
          <h2 className='px-3'>Trending<br/>Movies<br/>to watch now</h2>
          <span className='my-5 px-3 text-muted'>Most watch movies by days.</span>
          <div className='brdr'></div>
        </div>
      </div>
      {trendingMovies.map((movie,index)=>
      <div className='col-md-2 my-2' key={index}>
        <img className='w-100' src={imgBaseUrl+movie.poster_path} alt={movie.title} />
        <h2 className='h6 mt-2 text-center'>{movie.title}</h2>
      </div>
      )}
    </div>
    <div className='row my-5'>
      <div className='col-md-4'>
        <div>
          <div className='brdr w-25'></div>
          <h2 className='px-3'>Trending<br/>Tv shows<br/>to watch now</h2>
          <span className='my-5 px-3 text-muted'>Most watch tv shows by days.</span>
          <div className='brdr'></div>
        </div>
      </div>
      {trendingTvshows.map((movie,index)=>
      <div className='col-md-2 my-2' key={index}>
        <img className='w-100' src={imgBaseUrl+movie.poster_path} alt={movie.title} />
        <h2 className='h6 mt-2 text-center'>{movie.title}</h2>
      </div>
      )}
    </div>
    <div className='row my-5'>
      <div className="col-md-4">
        <div>
          <div className="brdr w-25"></div>
          <h2 className='px-3'>Trending <br/> People  <br/> to watch now</h2>
          <span className='my-5 px-3 text-muted'>Most watch People by days</span>
          <div className="brdr"></div>
          </div>
        </div>
        {trendingPeople.map((movie,index)=>
        <div className='col-md-2 my-2' key={index}>
          <img className='w-100' src={imgBaseUrl+movie.profile_path} alt={movie.title} />
          <h2 className='h6 mt-2'>{movie.name}</h2>
        </div>
        )}
    </div>
    </>
  )
}
