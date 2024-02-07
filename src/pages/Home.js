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
    <div>
      <h1>Home Page</h1>
      <p> {catData?.fact} </p>
      <button onClick={refetch}>More </button>

    </div>
  )
}

export default Home
