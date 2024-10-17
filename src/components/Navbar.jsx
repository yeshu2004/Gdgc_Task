import GetStartedBtn from './GetStartedBtn';
import { IoIosGlobe } from 'react-icons/io';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='p-5 px-7 lg:px-10 lg:py-5 flex items-center justify-between h-auto'>
      <div className='flex items-end gap-1 text-2xl '>
        <span className='h-fit w-fit text-3xl'><IoIosGlobe /></span>
        <h1 className='text-[#F63B34] font-semibold flex items-center'>nov<span className='text-[#224E87]'>ā</span></h1>
      </div>
      <div className='items-center gap-10 capitalize lg:flex hidden'>
              <div className='flex items-center gap-1'><h5>Business Checking</h5><span><IoIosArrowDown/></span></div>
              <div className='flex items-center gap-1'><h5>solution</h5><span><IoIosArrowDown/></span></div>
              <div className='flex items-center gap-1'><h5>resources</h5><span><IoIosArrowDown/></span></div>
              <div>results</div>
              <div className='flex items-center gap-1'><h5>contact</h5><span><IoIosArrowDown/></span></div>
          </div>
      <div className='flex items-center gap-5'>
        <h1 className='text-lg cursor-pointer text-[#F63B34]'>Login</h1>
        <div className='hidden lg:block'>
          <GetStartedBtn/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
