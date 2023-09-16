import { useEffect, useRef, useState} from "react";

const TrafficLight = ({trafficLight}) => {
    let colorRef = useRef(null);
    const [currentColor, setCurrentColor] = useState('green');

    useEffect(() => {
        colorRef.current = setTimeout(() => {
            setCurrentColor(trafficLight[currentColor].next)
        }, trafficLight[currentColor].duration);

        return () => {
            clearTimeout(colorRef.current);
        }
    },[currentColor])

    return (
        <div className="traffic-wrapper">
            {Object.keys(trafficLight).map(each => (
                <div className="each-light" style={{backgroundColor: currentColor === each && trafficLight[currentColor].backgroundColor}} />
            ))}
        </div>
    )
}

export default TrafficLight