// eslint-disable-next-line no-unused-vars
import { Button } from 'flowbite-react';
 
import Sahan from '../assets/Sahan.png'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
   <div className='flex flex-col sm:flex-row p-3   justify-center items-center rounded-br-3xl text-center'>
    <div className="flex-4 justify-center flex ">
 
            {/* <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
            <Link
            to='/search/guulaha'
            className='text-lg text-white hover:underline text-center'
          >
            successful story
          </Link>
            </Button> */}
  
            <div className="p-7 flex-1">
    <img src={Sahan} className='w-96 ml-18 rounded-lg'/>
    </div>
 
            <div className="p-7 flex-1">
    <img src={Sahan} className='w-96 ml-18 rounded-lg'/>
    </div>
 
            <div className="p-7 flex-1">
    <img src={Sahan} className='w-96 ml-18 rounded-lg'/>
    </div>
 
            <div className="p-7 flex-1">
    <img src={Sahan} className='w-96 ml-18 rounded-lg'/>
    </div>
 

    </div>
   </div>
  )
}

export default CallToAction
