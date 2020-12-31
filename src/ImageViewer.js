import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

const ImageViewer = ({ timecardPhotoUrls }) => {
  const [image, setImage] = useState(
    timecardPhotoUrls && timecardPhotoUrls[0] && timecardPhotoUrls[0].url
  );

  useEffect(() => {
    setImage(
      timecardPhotoUrls && timecardPhotoUrls[0] && timecardPhotoUrls[0].url
    );
  }, [timecardPhotoUrls]);

  return (
    image && (
      <Image src={image} alt="Worker-uploaded timecard image." fluid></Image>
    )
  );
};

export default ImageViewer;
