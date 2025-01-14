import { Carousel } from "flowbite-react";


const Banner = () => {
    return (
        <div className="h-96 sm:h-96 xl:h-[500px] 2xl:h-[550]">
        <Carousel slideInterval={3000} >
          <img src="https://i.ibb.co.com/64t4y99/fitness-1.jpg" alt="..." />
          <img src="https://i.ibb.co.com/5Yv5RGY/fitness-2.jpg" alt="..." />
          <img src="https://i.ibb.co.com/44M2C0S/fitness-3.jpg" alt="..." />
          <img src="https://i.ibb.co.com/fN8JsNX/fitness-4.jpg" alt="..." />
          <img src="https://i.ibb.co.com/5Yv5RGY/fitness-2.jpg" alt="..." />
        </Carousel>
      </div>
              
        
    );
};

export default Banner;