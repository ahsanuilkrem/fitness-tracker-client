

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Card } from 'flowbite-react';

const Reviews = () => {
    const axiosPublic = useAxiosPublic();
    const { data: reviews = [] } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const { data } = await axiosPublic('/review')
            return data;
        }  
       
    })
    console.log(reviews);


    return (
        <div className='my-14'>
                  <h2 className='text-2xl font-bold text-center mb-4'> Testimonials or Reviews</h2> 
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper  p-4"
                >
                    
                    {
                        reviews.map(review => <SwiperSlide key={review}>
                            <Card className= ' flex justify-center items-start text-center h-60 space-y-2 bg-gray-300'>
                              <div className='flex justify-center items-center'>
                              <img src={review.usre} alt="" srcset="" className='w-12 h-12 rounded-full' />
                              </div>
                                <p className='max-w-xs mx-auto text-black font-normal'>{review.review} </p>
                                <div className='flex gap-1 justify-center items-center'>
                                    <h3 className='text-black font-normal'>Rating:</h3>
                                    {review.rating}
                                  
                                </div>
                            </Card>
                        </SwiperSlide>)
                    }
                   
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;