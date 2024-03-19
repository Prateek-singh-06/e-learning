import img from "../../assets/card_photo.avif"
import { useNavigate } from "react-router-dom";
const CourseCard=(props)=>{
    const navigate=useNavigate();
    const opencourse=()=>{
        navigate('/courses/courseDetails', { state: { info: 'Some information' } });
    }

    return(
        <div className="flex flex-col  border-2 border-neutral-500 mb-10 mx-4 text-white rounded-xl shadow-inner  w-72 h-customh">
            <div className="border-b-2 w-auto h-auto ">
                <img src={img} className="rounded-t-xl max-h-44 h-full w-full -z-10"></img>
            </div>
            <div className="flex-1 bg-slate-700 h-custom-heigh h-full rounded-b-xl relative">
                <div className=" pl-4 py-2 text-xl">{props.item.course_title}</div>
                <div className="text-xs text-left pl-4 align-middle text-gray-300">{props.item.course_description}</div>
                <div className="absolute bottom-0 w-full h-auto flex items-center pl-5 ">
                    <button className=" px-5 py-1 rounded-lg mb-3 bg-emerald-400 text-black hover:bg-emerald-700 hover:text-white font-serif font-medium" onClick={opencourse}>Learn More</button>
                </div>
            </div>
        </div>
    )
}
export default CourseCard;