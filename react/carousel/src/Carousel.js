import { useState} from "react";
import './App.css';

const EachSlide = ({image_url, caption, active}) => (
        <div className={`each-slide ${active ? 'active' : ''}`}>
            <img src= {image_url} alt={caption} />
            <p>{caption}</p>
        </div>
)

const Carousel = ({images}) => {
    const [activeSlide, setActiveSlide] = useState(0);

    function handlePrevClick() {
        if(activeSlide === 0) {
            setActiveSlide(images.length - 1);
        } else {
            setActiveSlide(prev => prev - 1);
        }
    }

    function handleNextClick() {
        if(activeSlide === images.length - 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide(prev => prev + 1);
        }
    }

    return (
        <div className="wrapper">
            {images.map((each,index) => (
                <EachSlide {...each} key={each.caption} active={activeSlide === index} onClick={() => setActiveSlide(index)}/>
            ))}
            <div className="actions-wrapper">
            <div className="arrow" onClick={handlePrevClick}>{'<'}</div>
            <div className="dots-wrapper">
                {images.map((_,index) => (
                    <div className={`dot ${activeSlide === index ? 'active' : ''}`} onClick={() => setActiveSlide(index)}/>
                    ))}
            </div>
            <div className="arrow" onClick={handleNextClick}>{'>'}</div>
            </div>
        </div>
    )
}

export default Carousel