import NavBar from "../NavBar";
import myimg from "../../Assets/profile.jpg";

function HomePage(){
    return (
        <div id="Home">
            <NavBar/>
            <div className="home bg-[#443C68] xl:flex border-b-2">
                {/* left/top side of screen  */}
                <div className="bg-[#393053] h-[33%] flex justify-center border-b-2 border-b-white-500 xl:w-[33%] xl:h-[100%] xl:border-r-2 xl:border-r-white-500">
                    {/* div containing image  */}
                    <div className="img-con shadow-2xl img-con absolute h-[300px] w-[275px] bg-[#18122B] top-[17%] xl:top-[25%] xl:h-[400px] xl:w-[370px] xl:left-[21%] md:h-[350px] md:w-[315px]">
                         <div className="flex flex-col justify-center h-[100%] w-[100%] items-center">
                         <img className="h-[85%] w-[95%]" src={myimg} alt="Profile-Picture" />
                         </div>
                    </div>
                </div>

                {/* right/down side of screen with content  */}
                <div className="h-[60%] flex flex-col justify-center xl:h-[93%] xl:w-[63%]">
                    <div className="h-[50%] mt-[160px] mb-[15px] pb-0 xl:flex-col xl:ml-[13%] md:mt-[210px]">
                        <p className="text-white text-3xl text-center md:pt-7 xl:m-[10px] xl:text-5xl md:text-4xl drop-shadow-2xl">Hi, I'm Shreya Kumar!</p>
                        <p className="text-white font-bold text-xl xl:m-[10px] xl:text-3xl md:text-2xl xl:font-bold drop-shadow-2xl">Software Developer</p>
                        <button className="res-btn w-[200px] h-[50px] bg-[#635985] hover:font-bold m-7 font-semibold rounded-md text-lg shadow-2xl">
                        Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;