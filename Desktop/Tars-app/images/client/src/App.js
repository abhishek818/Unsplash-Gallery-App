import React, { Fragment, useEffect, useState } from "react";
import ListImages from "./components/ListImages";
import Popup from './components/Popup';
import Pagination  from './components/Pagination';

import './App.css';

const API_URL = "https://api.unsplash.com";
const imagePerPage = 500;
var currentImage;

const App = () => {
  // const [homepage, setHomepage] = useState(false);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("Homepage results from Unsplash List Photos API");
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(12);

  useEffect(() => {
 
  const getImages = async () => {

    try {
      
      const response = query==='Homepage results from Unsplash List Photos API' ? 
      
      await fetch(`${API_URL}/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`
      +`&per_page=${imagePerPage}`) : 
      
      await fetch(`${API_URL}/search/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`
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

const indexOfLastImage = currentPage * imagesPerPage;
const indexOfFirstImage = indexOfLastImage - imagesPerPage;
const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

const paginate = (pageNumber) => setCurrentPage(pageNumber); 

  
  return (
    <Fragment>
      <div>
        
        <ListImages 
          query={query} 
          setQuery={setQuery} 
          loading={loading} 
          setImage={setImage} 
          currentImages={currentImages} 
        />
        
        <Popup 
          image={currentImage} 
          trigger={showPopup} 
          setTrigger={setShowPopup}
        />
        
        <Pagination 
          imagesPerPage={imagesPerPage} 
          totalImages={images.length} 
          paginate={paginate}
        />

      </div>
    </Fragment>
  );

}

export default App;
