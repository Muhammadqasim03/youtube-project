import React from "react";
import "./Slidebar.css";
// import img1 from "./images/hq720.jpg";
// import img2 from "./images/how-to-boost-your-business-youtube-thumbnail-design-template-78f987de5b1b6fb47e8ccca0bdc905b1_screen.jpg";
// import img3 from "./images/hq720(3).jpg";
// import img4 from "./images/cartoon.jpg";
// import img5 from "./images/laptop1.jpg";
// import img6 from "./images/cartoon2.jpg";
// import img7 from "./images/laptop1.jpg";
// import img8 from "./images/car.jpg";
// import img9 from "./images/genious.jpg";
// import img10 from "./images/thumnail success.jpg";
// import img0 from "./images/profile.jpg";
import icon1 from "./icon/home-icon-silhouette-svgrepo-com (1).svg";
import icon2 from "./icon/icons8-youtube-shorts.svg";
import icon3 from "./icon/youtube_subscription_icon_136007.svg";
import icon4 from "./icon/history-7611.svg";
import icon5 from "./icon/download.jpg";
import icon6 from "./icon/your channel.png";
import List from "./List";
import "./List.css";
import Cards from "./Cards"
import "./Cards.css"

export default function Slidebar() 

{
  const videoList = [
    {
        img_url: "//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
        channelThumnailUrl: 'https://images.dog.ceo/breeds/terrier-american/n02093428_9797.jpg',
        vidTitle: "Ferraris are hand-built Italian supercars!",
        channelName: 'Luxury Car Space',
        views: '1.5M',
        // timeUp: '1 year ago'
    },
    {
        img_url: "//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
        channelThumnailUrl: 'https://images.dog.ceo/breeds/terrier-american/n02093428_9797.jpg',
        vidTitle: "Dijjal ka gum howa khota!",
        channelName: 'Haqeeqat TV',
        views: '1.5M',
        timeUp: '1 year ago'
    },
    {
        img_url: "//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
        channelThumnailUrl: 'https://images.dog.ceo/breeds/terrier-american/n02093428_9797.jpg',
        vidTitle: "Dijjal ka gum howa khota!",
        channelName: 'Haqeeqat TV',
        views: '1.5M',
        timeUp: '1 year ago'
    },
    {
        img_url: "//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
        channelThumnailUrl: 'https://images.dog.ceo/breeds/terrier-american/n02093428_9797.jpg',
        vidTitle: "Dijjal ka gum howa khota!",
        channelName: 'Haqeeqat TV',
        views: '1.5M',
        timeUp: '1 year ago'
    },
    {
        img_url: "//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
        channelThumnailUrl: 'https://images.dog.ceo/breeds/terrier-american/n02093428_9797.jpg',
        vidTitle: "Dijjal ka gum howa khota!",
        channelName: 'Haqeeqat TV',
        views: '1.5M',
        timeUp: '1 year ago'
    },
    {
        img_url: "//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
        channelThumnailUrl: 'https://images.dog.ceo/breeds/terrier-american/n02093428_9797.jpg',
        vidTitle: "Dijjal ka gum howa khota!",
        channelName: 'Haqeeqat TV',
        views: '1.5M',
        timeUp: '1 year ago'
    },
    {
        img_url: "//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
        channelThumnailUrl: 'https://images.dog.ceo/breeds/terrier-american/n02093428_9797.jpg',
        vidTitle: "Dijjal ka gum howa khota!",
        channelName: 'Haqeeqat TV',
        views: '1.5M',
        timeUp: '1 year ago'
    },
]

  return (
    <div className="main-container">
      <div class="slidebar">
        <div className="first-section">
          <ul>
            <li class="Home">
              {" "}
              <img className="icon1" src={icon1} alt="" /> 
              Home
            </li>
            <li class="Short">
              <img className="icon2" src={icon2} alt="" /> Short
            </li>
            <li class="Subscription">
              {" "}
              <img className="icon3" src={icon3}  alt=""/>
              Subscription
            </li>
            <li class="Your chennal">
              {" "}
              <img className="icon6" src={icon6}  alt="err"/>
              Your chennal
            </li>
            <li class="History">
              {" "}
              <img className="icon4" src={icon4} alt="err" />
              History
            </li>
            <li class="Playlist">
              {" "}
              <img className="icon5" src={icon5} alt="err" />
              Playlist{" "}
            </li>
            <li class="Your-videos"> Your videos</li>
            <li class="Watch later">Watch later</li>
            <li class="liked Videos">liked Videos</li>
          </ul>
        </div>
        <div className="second-section">
          <ul>
            <li class="Publisc News "> Publisc News</li>
            <li class="Kakay Vlogs">Kakay Vlogs</li>
            <li class="Ducky Bhai">Ducky Bhai</li>
          </ul>
        </div>
      </div>
      <div>
      <List></List> 
      <Cards videoList={videoList}/>  
      </div>
          
    </div>
  );
}
