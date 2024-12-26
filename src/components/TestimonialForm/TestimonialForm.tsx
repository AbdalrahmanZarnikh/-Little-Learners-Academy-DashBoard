// React And Hooks
import React, { useState } from "react";

//Hook-Form
import { useForm, SubmitHandler } from "react-hook-form";

// Styles
import "./TestimonialForm.css";
import { useNavigate, useParams } from "react-router-dom";

// Thunks
import { addTestimonail,updateTestimonial } from "../../redux/slice/testimonialSlice";


import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ButtonSpinner from "../buttonSpinner/ButtonSpinner";
import toast from "react-hot-toast";

// Types
type Inputs = {
  name: string;
  image: string;
  description: string;
  evaluation: string ;
};

const TestimonialForm: React.FC = () => {
  const dispatch=useAppDispatch();
  const {testimonials,isLoading,error}=useAppSelector(state=>state.testimonialSlice)
  const navigate=useNavigate();
  
  const { id } = useParams();


  
  let testimonialDetail:any=[{
    name:"",
    evaluation:"",
    description:"",
    image:null
   }];


  if (typeof id === "string") {
    const One= testimonials.filter((item)=>{
      return item._id==id;
    })
    testimonialDetail.pop();
    testimonialDetail.push(One[0]);
    
  }


    const [name]=useState(testimonialDetail[0].name);
    const [evaluation] = useState(testimonialDetail[0].evaluation );
    const [description] = useState(testimonialDetail[0].description);

  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>{
    const form=new FormData();
    if(typeof watch("image")!=="undefined"){
      form.append("image",data.image[0])
    }
    form.append("name",data.name);
    form.append("description",data.description);
    form.append("evaluation",data.evaluation)
    console.log(form)
    if(typeof id === "string"){
     dispatch(updateTestimonial({id:id,data:form}))
     if(error){
      toast.error("Please Try Again ")
     }
     else{
       toast.success("done")
       navigate("/testimonials")
     }
   }
   else{
     dispatch(addTestimonail(form))
     if(error){
      toast.error("Please Try Again ")
     }
     else{
       toast.success("done")
       navigate("/testimonials")
     }
   }
  }



  




  
  if(isLoading==="Pending"){
    return (
      <div className="flex justify-center items-center h-screen">
        <ButtonSpinner/>
      </div>
    )
  }

  return (
    <form className="student-form-form" onSubmit={handleSubmit(onSubmit)}>
      {/* Form Fields */}
      <div className="form-group">
        <label htmlFor="Name">Name</label>
        <input
          id="Name"
          type="text"
          placeholder="Enter Name"
          defaultValue={name}
          {...register("name",{required:"The Name is Required"})}
        />
        {errors.name && <span className="text-red-400">{errors.name.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input id="image" type="file" placeholder="Add Image" {...register("image")} />
      </div>
      <div className="form-group">
        <label htmlFor="evaluation">Evaluation</label>
        <input
          id="evaluation"
          type="text"
          placeholder="Enter Evaluation"
          defaultValue={evaluation}
          {...register("evaluation",{required:"The Evaluation is Required",
            validate:(value)=>{
              if(+value >5 ){
                return "you should evaluate between 0 and 5"
              }
              return true
            }
          })}
        />
      {errors.evaluation && <span className="text-red-400">{errors.evaluation.message}</span>}
      </div>
      <div className="form-group full-width">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          rows={4}
          defaultValue={description}
          {...register("description",{minLength:{value:10,message:"Too Short Description"}})}
          ></textarea>
          {errors.description && <span className="text-red-400">{errors.description.message}</span>}
      </div>
      <button type="submit" className="submit-button">
        {typeof id=="string" ?"UPDATE":"ADD"}
      </button>
    </form>
  );
};

export default TestimonialForm;
