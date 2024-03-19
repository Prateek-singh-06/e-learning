import CourseCard from "./CourseCard";
import { Coursedata } from "./coursedata";
const Course=()=>{
    const data=[{
        "one":"hello",
    },
    {
        "one":"hello",
    },
    {
        "one":"hello",
    },
    {
        "one":"hello",
    },
    {
        "one":"hello",
    },
    {
        "one":"hello",
    },
]
    return(
        <div className="px-8 py-10 w-auto bg-neutral-900">
            <div className="h-auto">
                <div className="flex">
                    <h1 className="mr-auto ml-6 font-semibold text-3xl text-white">Courses</h1>
                    <select className="border-2 border-white rounded-lg text-white bg-custombg2 mr-6">
                        <option>All courses</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div className=" h-full pt-10 flex flex-wrap justify-evenly">
                    {
                        Coursedata.map((item)=>{
                            return(
                                <CourseCard item={item}/>
                            )
                        }
                        )
                    }
                    {/* <div className="w-40 min-w-30 h-40 border-2 mb-10"></div>
                    <div className="w-40 min-w-30 h-40 border-2"></div>
                    <div className="w-40 min-w-30 h-40 border-2"></div>
                    <div className="w-40 min-w-30 h-40 border-2"></div>
                    <CourseCard/> */}

                </div>
            </div>
        </div>
    )

}
export default Course;