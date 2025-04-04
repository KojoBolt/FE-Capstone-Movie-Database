import React, {useState} from 'react'
import movieData from "./MovieData";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpg';




const SiderBar = ({setOpenSideBar}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setOpenSideBar(!isOpen); 
  };



  return (
    <div>
        <div className={`w-[300px] h-screen bg-[rgb(33,32,30)] fixed top-0 left-0 p-5  ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700 ease-in-out`}>
          <div className='closeContainer bg-green-900 text-white p-1 w-10 flex justify-center items-center rounded-full absolute right-[calc(-35px/2)] top-[calc(9rem/1.15)] h-10 z-1 cursor-pointer' onClick={toggleSidebar} >
            <div>
              <div className="closeButton ">
                <ClearRoundedIcon />
              </div>
            </div>
          </div>
        <div className="mt-20">
          <ul>
            {movieData.map((val, key) => (
              <li
                className="flex flex-row text-white p-4 gap-4 cursor-pointer mt-1"
                key={key}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div>{val.icon}</div>
                <div>{val.title}</div>
              </li>
            ))}
          </ul>
            <Link to='/login.jsx' className=' cursor-pointer bg-green-900 p-3 px-7 text-gray-100 text-sm font-bold rounded flex justify-center items-center m-auto mb-2'>Logout</Link>

          <div className="border-t flex p-3 text-white">
          <img className='top-90 w-10 h-10 rounded-4xl' src={profile}alt="" />
            <div className='flex justify-between items-center w-1 ml-3'>

            </div>
            <div className='flex flex-col ml-3 leading-4'>
              <h4 className="text-white"> David Dadzie</h4>
              <span className='text-gray-400'>dadzie@gmail.com</span>
            </div>
      </div>
        </div>
      </div>
    
    </div>
  )
}

export default SiderBar