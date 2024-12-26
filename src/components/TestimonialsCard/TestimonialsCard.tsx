import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import styles from "../../styles"

import styles2 from "../dashboardNav/header.module.css"
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { deleteTestimonial } from "../../redux/slice/testimonialSlice"; 
import Modal from "../Modal/Modal";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface TestimonialsCardProps {
  image?: string;
  name?: string;
  evaluation: number;
  description?: string;
  id?:string
}
const renderStars = (evaluation: number) => {
  const fullStars = Math.floor(evaluation);
  const halfStar = evaluation % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="stars w-full  flex items-center justify-center gap-1">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} size={20} color="#FF8D4C" />
      ))}
      {halfStar === 1 && <FaStarHalfAlt size={20} color="#FF8D4C" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} size={20} color="#FF8D4C" />
      ))}
    </div>
  );
};
const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  image,
  description,
  name,
  evaluation,
  id
}) => {

  const {error }=useAppSelector(state=>state.testimonialSlice)
  const [open,setOpen]=useState(false)

  const dispatch=useAppDispatch()
  const navigate=useNavigate();
  const handleClickUpdate = ()=>{
    navigate(`/testimonials/update/${id}`)
 
  }
  const handleClickDelete=()=>{
      dispatch(deleteTestimonial(id as string));
      if(!error){
        toast.success("item deleted successfully")
      }
      else{
        toast.error("try again")
      }
  }
  return (
    <div className={`TestimonialsCard ${styles.cardStyle} md:p-12 p-7 `}>
      <div className="flex justify-start items-center  gap-3 mb-2">
        <button className={styles2.btn} onClick={handleClickUpdate}>
          UPDATE
        </button>
        <button className={styles2.btn} onClick={()=>{setOpen(true)}}>
          DELETE
        </button>
      </div>
      <div className="profile text-center">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mx-auto md:mb-3 mb-2 bg-Orange_97 border border-black"
        />
        <span className="text-Grey_15 font-semibold md:text-[24px] text-[20px]">
          {name}
        </span>
      </div>
      <div className="reate w-full md:py-7 py-5">{renderStars(evaluation)}</div>
      <div className="">
        <p className="text-Grey_20 text-center font-medium md:text-[20px] text-[16px]">
          {description}
        </p>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn bg-red-500 rounded-md text-white hover:bg-red-300  p-2 w-full" onClick={handleClickDelete}>Delete</button>
            <button
              className="btn btn-light w-full"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TestimonialsCard;
