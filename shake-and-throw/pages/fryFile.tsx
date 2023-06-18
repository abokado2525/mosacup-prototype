import styles from "../styles/components/Home.module.css";
import FileUp from "./fileUp";
import React, { useEffect, useState } from "react";


function moveAnimation() {
    const [selectedImageUrl, setSelectedImageUrl] = useState('');
    const handleImageSelect =(imageUrl) =>{
        setSelectedImageUrl(imageUrl);
    }
    useEffect(() => {
        const storedImage = localStorage.getItem('previewImage');
        if (storedImage) {
          setSelectedImageUrl(storedImage);
        }
      }, []);

    return (
        <div>
          {selectedImageUrl &&  <img src={selectedImageUrl} alt="Preview" />}
        </div>
    );
}
    
export default moveAnimation;