import React from 'react'
import Features from './Features'
import circles from "../../assets/analytics.png";
import Tags from '../Analytics Card/Tags';
import Users from '../../assets/users.png'
import Graph from "../../assets/Graph.png"
import {MoveUpRight} from 'lucide-react'
import u1 from "../../assets/img1.png"
import u2 from "../../assets/img2.png"
import u3 from "../../assets/img3.png"
import u4 from "../../assets/img4.png"
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import Tags2 from '../Team List/Tags2';

const Sec4 = (elem) => {

    
    const card1 = (
        <>
        
        <div className=" bg-white/60 absolute bottom-7 -left-3 md:-left-13 backdrop-blur-sm h-68 w-68 lg:h-80 lg:w-81.5 flex xl:right-30 items-center justify-center rounded-[26px]">
            <div className="flex flex-col justify-center items-center border-[#EFF3FE] bg-[#ffffff] gap-3 h-60.5 w-60.5 lg:h-76.5 lg:w-75 rounded-2xl">
                <span className="self-start font-semibold text-[#020202] text-[14px] lg:text-lg ml-5">
                    Analytics Reports
                  </span>
                  <img
                    src={circles}
                    alt="analytics image"
                    loading="lazy"
                    className="h-40 w-40 lg:h-55 lg:w-55 "
                  />
              
            </div>
          </div>
          <div className="bg-white/60 relative top-20 md:top-6 left-8 md:left-20  backdrop-blur-sm h-47 w-82 flex items-center justify-center rounded-[26px]">
            <div className="tags flex flex-col gap-3 z-50 absolute h-40 w-75 bg-white px-6 py-3 rounded-2xl">
              <Tags
                borderColor="border-[#5A50D8]"
                span1="Financial Report"
                span2="90%"
              />
              <Tags
                borderColor="border-[#FFCC42]"
                span1="Business proposal"
                span2="70%"
              />
              <Tags
                borderColor="border-[#1AC7E5]"
                span1="Update leadership"
                span2="50%"
              />
              <Tags
                borderColor="border-[#E5381A]"
                span1="Onboarding plan"
                span2="28%"
              />
            </div>
          </div>
         
                
        
        </>
    );

    const card2=(
        <>
        <div className='flex flex-col bg-white/20 backdrop-blur-sm absolute rounded-[26px] bottom-10 -right-20 w-62 h-46.75'>
        
        <div className="flex flex-col items-center justify-center gap-2 border-[#EFF3FE] bg-[#ffffff] w-56.5 h-41.75 rounded-2xl">
              <div className="flex items-center ">
                <img
                  src={u1}
                  className="w-8 h-8 rounded-full border border-white z-0 -rotate-8"
                  loading="lazy"
                />
                <img
                  src={u2}
                  className="w-8 h-8 rounded-full border border-white -ml-2 z-1 -rotate-8"loading="lazy"
                />
                <img
                  src={u3}
                  className="w-12 h-12 rounded-full border border-white -ml-2 z-10 -rotate-8"loading="lazy"
                />
                <img
                  src={u4}
                  className="w-8 h-8 rounded-full border border-white -ml-2 z-3 -rotate-8"loading="lazy"
                />
                <img
                  src={u1}
                  className="w-8 h-8 rounded-full border border-white -ml-2 z-3 -rotate-8"loading="lazy"
                />
                
              </div>
              
        
              <h6 className="text-sm text-gray-600 gap-1.5 font-medium flex items-center" >
                <span className="text-[39px] text-gray-950 font-semibold">+18%</span> <span>Growth</span>
              </h6>
            </div>
            </div>

        
        <div className= "bg-white/20 backdrop-blur-sm h-50 w-80 absolute -left-35  flex items-center justify-center rounded-[26px]" >
      <div className="flex justify-around items-center border border-[#EFF3FE] bg-[#ffffff] gap-3 h-45 w-75 rounded-2xl">
        <div className="infos flex flex-col justify-center items-center">
            <div className="top flex justify-left items-center gap-2 font-semibold text-[16px] text-gray-950">
                <img src={Users} alt="users icon" loading='lazy' className='rotate-10' />
                <span>Employees</span>
            </div>
            <div className="bottom flex flex-col justify-center items-left gap-2">
            <h4 className="text-[39px] font-semibold">340</h4>
            <div className='flex justify-center items-center gap-2'>

                <span className='flex items-center justify-center gap-1 text-[#02C519] text-xs font-normal'><MoveUpRight className='h-4'/> 07.50%</span>
                <span className='text-gray-300 text-xs font-medium'>Last 6 Days</span>
            </div>
            </div>
        </div>
        <div className="graph">
            <img src={Graph} alt="graph image" loading="lazy" className='rotate-10 w-28 h-23.5' />
        </div>
      </div>
    </div>
        </>
    );


    const card3 = (
        <>
        <div className=" bg-white/20 backdrop-blur-sm h-80 absolute -top-40 -left-40  w-80  flex items-center justify-center rounded-[26px]" >
      <div className="flex flex-col justify-center items-center border border-[#EFF3FE] bg-[#ffffff] gap-3 h-74 w-75 rounded-2xl">
       <span className="self-start font-semibold text-[#020202] text-lg ml-5">
          Team List
        </span>
        <div className="tags flex flex-col">
        <Tags2 border="border-b" borderColor1="border-[#F6F6F6]" span1="Dianne Russell" span2="Marketing" bg="bg-[#EFF3FE]" img={img1}/>
        <Tags2 border="border-b" borderColor1="border-[#F6F6F6]" span1="Bessie Cooper" span2="Design" bg="bg-[#FFF9EB]" img={img2}/>
        <Tags2 border="border-b" borderColor1="border-[#F6F6F6]" span1="Floyd Miles" span2="Finance" bg="bg-[#EDFAFD]" img={img3}/>
        <Tags2 border="border-b" borderColor1="border-[#F6F6F6]" span1="Esther Howard" span2="Development" bg="bg-[#FDEFED]" img={img4}/>
        <Tags2  span1="Floyd Miles" span2="Finance" bg="bg-[#EDFAFD]" img={img3}/>
        </div>
      </div>
    </div>
        </>
    )

  return (

    

    <div className='bg-[#FFFFFF] relative flex flex-col w-full items-center my-10 gap-20'>
      <div className="info flex flex-col items-center gap-4 px-4 md:w-184">
        <h3 className='text-gray-950 font-semibold text-4xl md:text-5xl' style={{fontFamily:"Instrument Sans"}}>Powerful features</h3>
        <p className='text-center text-gray-700 font-normal text-lg '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
      <div className="features flex flex-col gap-10">
        <Features flex="lg:flex-row" items="items-left"  span="Easy Admin" h3="Take the pain out of company admin" p="Eliminate the hassle, nobody wants it. Take the pain out of company admin with our all-in-one platform. Simplify projects and focus on what really drives your business forward." code={card1}/>
        <Features flex="lg:flex-row-reverse" items="items-start" span="Ready for scale" h3="Grow with your Business" p="Now you can grow confidently, nothing holding you back. Our platform grows as you grow. Adapting to your needs. Scale from a pre-seed startup to public company with Dashify." code={card2}/>
        <Features flex="lg:flex-row" items="items-left" span="Central Platform" h3="Manage your team in one place" p="Centralize your team management. Manage your entire team in one tool. Easy communication, project management, and smooth collaboration with your team." code={card3} />
      </div>
    </div>
  )
}

export default Sec4
