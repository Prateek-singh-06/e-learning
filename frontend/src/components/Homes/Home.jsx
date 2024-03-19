
import img from "../../assets/student.svg"
import "./home.css";
const Home=()=>{
    return(
        <div className="w-aut h-auto bg-stone-30 px-padding-home overflow-y-hidden relative bg-green-500 sm:bg-transparent">
            <div class="quadrilateral"></div>

            <div className="pt-16 pb-28 w-auto">
                <div className="flex flex-col sm:flex-row" >
                    <div className="h-auto">
                        <div className="grid grid-rows-2 gap-y-10" >
                        <div className="font-bold text-5xl pt-5 pb-5">
                            <h1 className="">Explore Our</h1>
                            <h1 className="text-blue-700">Creative</h1>
                            <h1>Classes</h1>
                        </div>
                        <div className="font-normal">
                            Our courses are taught by experienced professionals working in their fields. They have years of real-world experience and are passionate about teaching others.
                        </div>
                        </div>
                        <div>
                            <button className="bg-black hover:bg-slate-800 h-10 w-5/12 mr-auto rounded-xl text-white">Get Started</button>
                            <button className=" w-5/12 h-10 ml-4 bg-white border-2 hover:bg-slate-300 border-black rounded-xl ">Learn More</button>
                        </div>
                    </div>
                    <div className=" flex mt-10" > 
                    {/* <div className="bg-slate-500 rounded-xl"> */}
                        <img src={img}className="w-6/6" alt="img"></img>
                    {/* </div> */}
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Home;