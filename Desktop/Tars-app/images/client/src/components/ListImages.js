import React, { Fragment, useEffect, useState } from "react";
import { Popup } from './Popup';

const API_URL = "https://api.unsplash.com";
const imagePerPage = 20;
var currentImage;

const ListImages = () => {
  // const [homepage, setHomepage] = useState(false);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("Homepage results from Unsplash List Photos API");
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  

  useEffect(() => {
 
  const getImages = async () => {
    try {

      const response = query==='Homepage results from Unsplash List Photos API' ? 
      await fetch(`${API_URL}/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`
      +`&per_page=${imagePerPage}`) : await fetch(`${API_URL}/search/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`
      +`&query=${query}&per_page=${imagePerPage}`);
      
      const data = await response.json();

      if(query==='Homepage results from Unsplash List Photos API')
      setImages(data);      

      else
      setImages(data.results);      
      setLoading(false);
            
    } catch (err) {
      console.error(err.message);
    }
  };

    getImages();
  });


const setImage = (image) => 
{
  setShowPopup(true);
  currentImage = image;
}


  return (
    <Fragment>

      <span>
      <select className="select mt-5"
       value={query} onChange = {(e) =>
      {
        setQuery(e.target.value);
      }}>
        <option value=""> Select an Option </option>
        <option value="Bangalore"> Bangalore </option>
        <option value="Mumbai"> Mumbai </option>
        <option value="Kolkata"> Kolkata </option>
        <option value="Delhi"> Delhi </option>
        <option value="Ahmedabad"> Ahmedabad </option>
      </select>
      
      <input type="text" className="search" placeholder="Search" 
        value={query} onChange = {(e) =>
      {
        setQuery(e.target.value);
      }} />
      <i className="fa fa-search" />
    
    </span>

      <h4 className="header"> Search Results for "<span style={{ color:"red" }}>{query}</span>" </h4>
       
      { loading ? <h3>Loading...</h3> : images.map(image =>
        ( <>
          <div className="img-col">          
            
            <img src={image.urls.thumb} 
              alt={image.alt_description}
              key={image.id}
              onClick={() => setImage(image)}>
            </img>

            <div className="img-content">
              {image.user.name} 
              <br></br> Likes : {image.likes}
            </div>
          
          </div>
          </>
        )
      )}
      
    <Popup image={currentImage} trigger={showPopup} setTrigger={setShowPopup}/>

    </Fragment>
  );
};

export default ListImages;

 

      