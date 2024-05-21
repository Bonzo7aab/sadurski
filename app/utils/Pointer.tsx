import { useEffect, useState } from "react";

export const Pointer = () => {
    const [mousePos, setMousePos] = useState({});
    useEffect(() => {
        const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
          setMousePos({ x: event.clientX, y: event.clientY });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener(
            'mousemove',
            handleMouseMove
          );
        };
    }, []);
}