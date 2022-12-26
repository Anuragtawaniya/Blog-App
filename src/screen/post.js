import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Post = (props)=>{
    const [data,setData] = useState([]);
    const{id}=useParams()
    useEffect(()=>{
        fetch("https://dummyapi.io/data/v1/post?limit=10", {
          headers: { "app-id": "63a837f19789975db4e2e09a" },
       })
          .then((data) => data.json())
          .then((json) => {setData(json.data)
        console.log(json.data);
        })
          .catch((err) => console.log(err));
      
      },[])
    return(
<>
<h1>Post</h1>
<div className="container">
   
   <img src={data[id]&&data[id].image} className="bannerImg" />

<p>{data[id]&&data[id].text}</p>

<p>{data[id]&&data[id].likes}</p>
<div className="flex owner-card">
<img src={data[id]&&data[id].owner.picture} className="ownerImg" />
<p>{data[id]&&data[id].owner.title}</p>
<p>{data[id]&&data[id].owner.firstName}</p>
<p>{data[id]&&data[id].owner.lastName}</p>
</div>
{data[id]&&data[id].tags.map((val)=>{
return <p className="flex">{val}</p>
})}

<p className="flex">{data[id]&&data[id].publishDate}</p>


</div>
</>
    )
}
export default Post;