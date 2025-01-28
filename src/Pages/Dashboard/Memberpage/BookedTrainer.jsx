import { Button, Card, Modal, Rating } from 'flowbite-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const BookedTrainer = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [rating, setRating] = useState(0);
    const { register, handleSubmit, reset } = useForm()
    const [openModal, setOpenModal] = useState(false);
    function onCloseModal() {
        setOpenModal(false);
    }

    const onSubmit = async (data) => {
        console.log(data)
        const formReview = {
            review: data.review,
            rating: rating,
            usre: user.photoURL
        }
        console.log(formReview)
        axiosPublic.post('/review', formReview)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your added to the class ",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                })
             }

           

    return (
        <div>
            <h2 className='text-2xl font-bold text-center'>Booked Trainer Details</h2>
            <Card>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <h4>Trainer Info</h4>
                    </div>
                    <div>
                        <h4>Slot Info</h4>
                    </div>
                    <div>
                        <h4>Classes Info</h4>
                    </div>
                    <div>
                        <h4>Other Info</h4>
                    </div>
                </div>
                <div className='flex justify-end items-end'>
                    <button onClick={() => setOpenModal(true)} className='btn'> Review button</button>

                    <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-5">Submit Review</h3>
                                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                                    <div>
                                        <textarea  {...register("review", { required: true })}
                                            type='text'
                                            placeholder='when your feedback'
                                            className='textarea textarea-bordered w-full'
                                            rows={5}
                                        ></textarea>

                                    </div>


                                    <div className='flex gap-1 rating'>
                                        <h3>Rating:</h3>
                                        <Rating >
                                            <input type="radio" name="rating-1"   className="mask mask-star-2" checked={rating >= 1} onClick={() => setRating(1)}/>
                                            <input type="radio" name="rating-2" className="mask mask-star-2"  checked={rating >= 2} onClick={() => setRating(2)}/>
                                            <input type="radio" name="rating-3" className="mask mask-star-2"  checked={rating >= 3} onClick={() => setRating(3)}/>
                                            <input type="radio" name="rating-4" className="mask mask-star-2"  checked={rating >= 4} onClick={() => setRating(4)}/>
                                            <input  type="radio" name="rating-5" className="mask mask-star-2"  checked={rating >= 5} onClick={() => setRating(5)} />
                                        </Rating>
                                    </div>

                                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">

                                        <Button type="submit" >Submit</Button>
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </Card>

        </div>
    );
};

export default BookedTrainer;