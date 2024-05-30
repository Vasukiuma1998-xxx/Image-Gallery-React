import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import dog1 from "./assets/images/dog1.jpg"
import dog2 from "./assets/images/dog3.jpg"
import dog3 from "./assets/images/dog2.jpg"
import dog4 from "./assets/images/dog5.avif"
import dog5 from "./assets/images/dog4.avif"
const root = ReactDOM.createRoot(document.getElementById('root'));
function Image(props){
  return(
   
        <div class="cards">
            <img src={props.pic}></img>
            <p>{props.name}</p>
        </div>
      
  )
}
var image=[{
  pic:dog1,
  name:"Penny"
},
{
  pic:dog2,
  name:"Remington"
},
{
  pic:dog3,
  name:"Riley"
},
{
  pic:dog4,
  name:"Scarlett"
},
{
  pic:dog5,
  name:"The innocent Look"
},
{
  pic:dog1,
  name:"The innocent Look"
},
{
  pic:dog1,
  name:"The innocent Look"
},
{
  pic:dog1,
  name:"The innocent Look"
}
]
root.render(
  <div class="container">
    {
      image.map(function(item){
       return<Image pic={item.pic} name={item.name}></Image>
      })
    }
  </div>
  )


