// Router-Dom
import { useNavigate, useParams } from "react-router-dom"
// Styles
import styles from "../../components/dashboardNav/header.module.css"
// Component
import TestimonialForm from "../../components/TestimonialForm/TestimonialForm";


const NewTestimonial:React.FC = () => {
  const navigate=useNavigate();
  const clickedHandler=()=>{
    navigate(-1); 
  }
  return (
    <div className="p-11">
      <button className={`${styles.btn} mb-4`} onClick={clickedHandler}>
         BACK
      </button>
       <TestimonialForm/>

    </div>
  )
}

export default NewTestimonial