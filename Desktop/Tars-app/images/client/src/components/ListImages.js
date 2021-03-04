import React, { Fragment } from "react";

const ListImages = ({ query, setQuery, loading, setImage, currentImages }) => {
  return (
    <Fragment>

      <span>
      <select className="select mt-4"
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
       
      { loading ? <h3>Loading...</h3> : currentImages.map(image =>
        ( <>
          <div className="img-col"
               onClick={() => setImage(image)}>          
            
            <img src={image.urls.thumb} 
              alt={image.alt_description}
              key={image.id}
              className="img-results">
            </img>

            <div className="img-content">
              {image.user.name} 
              <br></br> Likes : {image.likes}
            </div>
          
          </div>
          </>
        )
      )}
      
    
    </Fragment>
  );
};

export default ListImages;

 

      
