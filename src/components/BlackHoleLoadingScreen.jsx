import React, { useEffect } from "react";
import "./styles/BlackHoleLoadingScreen.css";

export const RocketToMoonLoadingScreen = ({ onComplete }) => {
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         onComplete();
    //     }, 6000);

    //     return () => clearTimeout(timer);
    // }, [onComplete]);

    const generateStars = () => {
        const stars = [];
        for (let i = 0; i < 100; i++) {
            const style = {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
            };
            stars.push(<div key={i} className="star" style={style}></div>);
        }
        return stars;
    };

    return (
        <div className="rocket-to-moon-loading-screen">
            <div className="stars">{generateStars()}</div>
            <div className="rocket">🚀</div>
            <div className="moon">🌕</div>
        </div>
    );
};