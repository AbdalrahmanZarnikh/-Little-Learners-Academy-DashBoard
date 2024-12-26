import React, { useEffect } from "react";

// Components
import TestimonialsCard from "../../components/TestimonialsCard/TestimonialsCard";

// Thunks

import { getAllTestimonials } from "../../redux/slice/testimonialSlice";

// Styles
import styles from "../../components/dashboardNav/header.module.css";



// Router-Dom
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import ButtonSpinner from "../../components/buttonSpinner/ButtonSpinner";


const Testimonials: React.FC = () => {
  const navigate=useNavigate();
  const dispatch=useAppDispatch();

  const {testimonials,isLoading,error}=useAppSelector(state=>state.testimonialSlice)
  
 const clickedHandler=()=>{
  navigate("/testimonials/add")
 }


 useEffect(()=>{
    dispatch(getAllTestimonials());
 },[dispatch])
 
  if(isLoading==="Pending"){
    return (
      <div className="flex justify-center items-center h-screen">
        <ButtonSpinner/>
      </div>
    )
  }
  return (
    <>
    <div className="p-11">
    <button className={`${styles.btn} mb-4`} onClick={clickedHandler}>
      ADD NEW
    </button>
      {testimonials.length>0? testimonials?.map((testimonial,index) => {
        return (
          <div className="mb-6" key={index}>
            <TestimonialsCard
              id={testimonial._id}
              image={testimonial.image}
              description={testimonial.description}
              evaluation={testimonial.evaluation}
              name={testimonial.name}
            />
          </div>
        );
      }):<h1 className="flex justify-center items-center flex-col mt-20 font-bold text-5xl text-red-500">Data Not Found <p> {error}</p></h1>}
    </div>
    

    </>
  );
};

export default Testimonials;
