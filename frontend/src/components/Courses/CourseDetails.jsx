import { CiCalendar } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";
const CourseDetails=()=>{
    return(
        <div className="w-auto h-auto sm:p-12 border-2 p-0">
            <div className="w-auto h-10  text-3xl font-bold text-center mb-10">Web Development</div>
            <div className="border-2 pb-7 h-auto">
            <div className="pl-5 flex">
                <div className="mr-auto">
                <div className="mt-8 font-medium text-lg font-serif ">Web Development</div>
                <div className="text-slate-500 font-medium mb-8">Faculty name</div>
                </div>
                <div className=" mr-auto pt-10">
                    <div className="flex">
                    <CiCalendar className="text-2xl text-slate-500" />
                    <div className="text-slate-500 font-medium text-sm">DURATION</div>
                    </div>
                    <div className="ml-2">2 hours</div>

                </div>
            </div>
            <div className="flex ml-5 mr-5 pb-10 border-b-2">
                <MdOutlinePeople className="text-3xl text-gray-600" />
                <div >1000+ registered</div>
            </div>
            
            <div className="ml-5">
                <div className="my-5 font-medium text-lg font-serif">About the course</div>
                <div className="w-4/6">In this course, students will learn how to create user interfaces with XML layouts, handle user input and gestures, and work with data storage options like SQLite databases and SharedPreferences. Additionally, they will explore networking, background processing, and publishing apps to the Google Play Store.</div>
                <div className="w-auto h-auto mr-5 mt-8 flex justify-center">
                    <button className="border-2 py-2 px-5 rounded-lg text-white bg-sky-500 hover:bg-sky-700 transition duration-500 text-xl">Register Now</button>
                </div>
            </div>
            </div>

        </div>
    )

}
export default CourseDetails;