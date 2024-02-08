import React from 'react';
import {useQuery} from "@tanstack/react-query";
import Axios from "axios";

function Home() {
  const { data:catData, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });
  

  if(isLoading) {
    return<p> Loading..</p>
  }

  if (isError) {
    return <p>Sorry, there are an error..</p>
  }

  return (
    <div className="main-content">

      <div className="section1">
        <h1 className="catFact-title">CAT FACT !</h1>
        <div className="catFact-box">
            <p className="catFact-subtitle">Did you know ?</p>
            <p> {catData?.fact} </p>
            <button className="home-button" 
              onClick={refetch}>More </button>
            <img className="catFact-gif"  width="150px"
            src={`${process.env.PUBLIC_URL}/gif/meowfact1.gif`}  />
        </div>
      </div>
    </div>
  )
}

export default Home
