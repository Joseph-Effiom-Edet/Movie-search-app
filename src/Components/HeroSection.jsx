import React from "react";
import img from"../images/bg.jpg"


function HeroSection() {
    return <div className="h-[34.375rem] w-[90rem] relative" style={{ backgroundImage: `url(${img})`, backgroundSize:"1440px 550px", backgroundRepeat:"no-repeat"}}>
        <div className="absolute top-[100px] lg:left-[77px] md:left-[321px] sm:left-[200px] xs:left-[150px] lg:text-left md:text-center sm:text-center xs:text-center">
        <p className="text-white text-7xl font-bold not-italic tracking-tighter font-DM Sans leading-[5.875rem]">Watch</p>
        <p className="text-white text-7xl font-bold not-italic tracking-tighter font-DM Sans leading-[5.875rem]">something</p>
        <p className="text-white text-7xl font-bold not-italic tracking-tighter font-DM Sans leading-[5.875rem]">incredible.</p>
        </div>
        
    </div>

    
}

export default HeroSection;