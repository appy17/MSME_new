import React from 'react';
import Footer from './Footer';


const Gallery = () => {
  const images = [
    {
      src: 'https://i.postimg.cc/Kck8wnbr/Whats-App-Image-2024-11-18-at-12-30-27-4243ef58.jpg',
      title: 'Library',
      subtitle: 'Architect Design',
    },
    {
      src: 'https://i.postimg.cc/Kj6Shkn0/Whats-App-Image-2024-11-18-at-12-30-27-7edd714d.jpg',
      title: 'Night Sky',
      subtitle: 'Cinematic',
    },
    {
      src: 'https://i.postimg.cc/cC82hxVw/Whats-App-Image-2024-11-18-at-12-30-28-8076332c.jpg',
      title: 'Tea Talk',
      subtitle: 'Composite',
    },
    {
      src: 'https://i.postimg.cc/LXWGjY0m/Whats-App-Image-2024-11-18-at-12-30-28-95866e2c.jpg',
      title: 'Road',
      subtitle: 'Landscape',
    },
    {
      src: 'https://i.postimg.cc/Kck8wnbr/Whats-App-Image-2024-11-18-at-12-30-27-4243ef58.jpg',
      title: 'Vintage',
      subtitle: 'Cinematic',
    },
  ];

  return (
     <>
    <div className="gallery-container">
    {/* <p
  className="text-center font-bold"
  style={{
    width: "100%",
    fontSize: "18px",
  }}
>
  Gallery
</p> */}

      <div className="gallery-image">
        {images.map((image, index) => (
          <div className="img-box" key={index}>
            <img src={image.src} alt={image.title} />
            <div className="transparent-box">
              <div className="caption">
                <p>{image.title}</p>
                <p className="opacity-low">{image.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Gallery;
