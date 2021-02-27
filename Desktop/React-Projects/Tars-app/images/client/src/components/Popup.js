import React from 'react';

export const Popup = (props) =>
{
    return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            
            <button className="close-btn" onClick={() => props.setTrigger(false)}>
                close
            </button>
            
            <div className="popup-inner-image">
                <img src= {props.image.urls.full} 
                alt={props.image.alt_description}
                key={props.image.id} />
               
                {props.image.user.name} 
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


// <img src= {props.image} 
//               alt={props.image.alt_description}
//               key={props.image.id} />
// <span>Category : {props.image.tags ? (props.image.tags[0] ? (props.image.tags[0].source
                //     ? props.image.tags[0].source.ancestry.category.slug : "No source") :
                //     props.image.tags[0].source.ancestry.category.slug : "No tags") : "Not Provided"} 
                // </span> 