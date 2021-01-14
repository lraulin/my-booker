import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Image from 'react-bootstrap/Image';

const ImageViewer = ({ timecardPhotoUrls }) => {
  const [active, setActive] = useState(1);
  const pageItems = timecardPhotoUrls.map((item, i) => (
    <Pagination.Item key={item.id} active={i + 1 === active}>
      {i + 1}
    </Pagination.Item>
  ));

  const getImageUrl = () => timecardPhotoUrls[active - 1].url;

  const handleClickNext = () => {
    if (active + 1 <= timecardPhotoUrls.length) {
      setActive(active + 1);
    }
  };
  const handleClickPrev = () => {
    if (active - 1 >= 1) {
      setActive(active - 1);
    }
  };

  // useEffect(() => {
  //   console.log('ImageViewer Component using Effect!');
  //   setImage(
  //     timecardPhotoUrls && timecardPhotoUrls[0] && timecardPhotoUrls[0].url,
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <Image
        src={getImageUrl()}
        alt="Worker-uploaded timecard image."
        fluid
      ></Image>

      <Pagination>
        <Pagination.Prev onClick={handleClickNext} disabled={active === 1} />
        {pageItems}
        <Pagination.Next
          onClick={handleClickPrev}
          disabled={active === timecardPhotoUrls.length}
        ></Pagination.Next>
      </Pagination>
    </div>
  );
};

export default ImageViewer;
