
import { useEffect,useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Post from './post';



function Home() {
  const [data,setData] = useState([]);
 



useEffect(()=>{
  fetch("https://dummyapi.io/data/v1/post?limit=10", {
    headers: { "app-id": "63a837f19789975db4e2e09a" },
 })
    .then((data) => data.json())
    .then((json) => setData(json.data))
    .catch((err) => console.log(err));

},[])

const navigate=useNavigate()


  return (
    
    
    <div class="container-fluid">
 {data.map((ele,i)=>{
  return(
<>


  <div class="row flex">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card" data-id={ele.id}>
        <img class="card-img" src={ele.image} alt="Bologna" />
      
        <div class="card-body">
          <h4 class="card-title">{ele.title}</h4>
        
          <p class="card-text">{ele.text}</p>
          <button  class="btn btn-info" onClick={()=>navigate("/post/"+i)} >Read more.</button>
        </div>
        <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div class="views">{ele.publishDate}
          </div>
      
           
        </div>
      </div>
    </div>
  </div>




      
</>
  )
 })}
     </div>
  );
}

export default Home;