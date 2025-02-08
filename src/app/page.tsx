import React from "react";
import Hero from "./componenets/hero";
import { client } from "@/sanity/lib/client";



const Home = async() => {
  const query = `*[_type == "blog"]  | order(_updatedAt asc) {
  title,
  description,
  image,
  "slug":slug.current
}`

 const data : Interface[] = await client.fetch(query);
  

  return (
    <div>
      
      {
        data.map((data:Interface) => (

          <Hero data= {data} key={data.slug}/>

        ))
      }
     
    </div>
  )
};
export default Home



