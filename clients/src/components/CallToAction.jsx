// eslint-disable-next-line no-unused-vars
import { Button } from 'flowbite-react';
 
import goal from '../assets/goal.jpg'
import sotry from '../assets/sotry.jpg'
import gym from '../assets/gym.jpeg'
import moti from '../assets/moti.jpg'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 justify-center items-center rounded-br-3xl text-center'>
      <div className="flex flex-col sm:flex-row justify-center flex-wrap">
        <div className="p-3 sm:p-7 flex-1 relative group">
          <img src={goal} className='w-full sm:w-96 rounded-lg'/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white text-lg rounded-lg">
            Goal Achievement
          </div>
        </div>
        <div className="p-3 sm:p-7 flex-1 relative group">
          <img src={sotry} className='w-full sm:w-96 rounded-lg'/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white text-lg rounded-lg">
            Success Story
          </div>
        </div>
        <div className="p-3 sm:p-7 flex-1 relative group">
          <img src={gym} className='w-full sm:w-96 rounded-lg'/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white text-lg rounded-lg">
            Gym Workout
          </div>
        </div>
        <div className="p-3 sm:p-7 flex-1 relative group">
          <img src={moti} className='w-full sm:w-96 rounded-lg'/>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white text-lg rounded-lg">
            Motivation
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction;
        