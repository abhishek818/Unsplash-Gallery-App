import React from 'react';

const Popup = (props) =>
{
    return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            
            <button className="btn-close btn-close-black" onClick={() => props.setTrigger(false)}>
            </button>
            
            <div className="popup-inner-image">
                <img src= {props.image.urls.full} 
                alt={props.image.alt_description}
                key={props.image.id} />
    
                <span><br></br></span>
    
                <span>Desc : {props.image.alt_description ?
                props.image.alt_description : "Not Provided"}
                </span>
    
                <span>UserName : {props.image.user.name}</span>
    
                <span>Likes : {props.image.likes} </span>
    
                <span>Twitter Username : {props.image.user.twitter_username ? 
                    props.image.user.twitter_username : "Not Provided" }
                </span> 
    
                <span>Portfolio Url : {props.image.user.portfolio_url ?
                    props.image.user.portfolio_url : "Not Provided" } 
                </span> 
    
            </div>
        </div>
    </div>
 ) : "";
};

export default Popup;



// <img src= {props.image} 
//               alt={props.image.alt_description}
//               key={props.image.id} />
// <span>Category : {props.image.tags ? (props.image.tags[0] ? (props.image.tags[0].source
                //     ? props.image.tags[0].source.ancestry.category.slug : "No source") :
                //     props.image.tags[0].source.ancestry.category.slug : "No tags") : "Not Provided"} 
                // </span> 