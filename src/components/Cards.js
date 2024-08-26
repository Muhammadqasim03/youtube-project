import React from 'react'
import "./Cards.css";
import { useNavigate ,} from 'react-router-dom';


export default function Cards({videoList}) 
{
    const navigate=useNavigate()
    function goToScreen(){
        navigate("/player")
    }
    return (

        <div className="card-listing">
            <div className="cards">
                {
                    videoList.map((vid, i) => (
                        <div class="card" onClick={goToScreen}  key={i}>
                            <div class="img">
                                <img className="crd-img" src={vid.img_url} alt="errrrr" />
                            </div>
                            <div class="description">
                                <img className="desc-img" src={vid.channelThumnailUrl} alt="error" />
                                <div className="d-flex flex-column">
                                    <div className="title">
                                        {vid.vidTitle}
                                    </div>
                                    <div>{vid.channelName} </div>
                                    <div>{vid.views} Views</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        
    );
}