import React, { useState } from "react";
import "./Gallery.css"; // Import des styles CSS pour la galerie

// Import des images
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image11 from "../assets/image11.jpeg";
import image12 from "../assets/sou1.jpeg";

function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
    };

    // Tableau d'objets images
    const images = [
        {
            src: image3,
            alt: "Image 3",
        },
        {
            src: image2,
            alt: "Image 2",
        },
        {
            src: image1,
            alt: "Image 1",
        },
        {
            src: image4,
            alt: "Image 4",
        },
        {
            src: image5,
            alt: "Image 5",
        },
        {
            src: image6,
            alt: "Image 6",
        },
        {
            src: image7,
            alt: "Image 7",
        },
        {
            src: image8,
            alt: "Image 8",
        },
        {
            src: image9,
            alt: "Image 9",
        },
        {
            src: image11,
            alt: "Image 11",
        },
        {
            src: image12,
            alt: "Image 12",
        },
    ];

    return (
        <div className="gallery-container">
            <div className="image-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={index === activeIndex ? "active" : ""}
                    />
                ))}
            </div>
            <button className="prev-btn" onClick={handlePrevClick}>
                &#171;
            </button>
            <button className="next-btn" onClick={handleNextClick}>
                &#187;
            </button>
        </div>
    );
}

export default Gallery;
