import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData()
//     const  [data,setdata] = useState([])
//   useEffect(() => {
//     fetch(`https://api.github.com/users/Neeraj110`).then(res => res.json()).then(data => {
//         setdata(data)
//     })
//   }, []);
  return (
    <>
      <h1 className="text-center">Github Follwers : {data.followers}</h1>
      <img className=" px-11 " src={data.avatar_url} alt="" />
    </>
  );
}


export const githubinfo =  async() =>  {
    const response = await  fetch(`https://api.github.com/users/Neeraj110`)

    return response.json()
}