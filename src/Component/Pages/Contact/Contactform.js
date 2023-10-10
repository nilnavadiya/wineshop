import React from 'react'
import Button from '../../common/Button'

const Contactform = () => {
  return (
    <div className='bg-[#f5f5f5] py-12'>
      <div className='max-w-7xl mx-auto px-4 lg:px-14'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='p-6'>
            <span className='text-2xl text-[#d00035] font-lobster pb-8'>Let's Talk</span>
            <h1 className='text-4xl font-bold font-raleway pb-2'>We Are Here To Help You</h1>
            <div className='pb-2'>
              <span className='text-lg'>Call Us</span>
              <h4 className='text-[#d00035] text-2xl'>+990-123-4567</h4>
            </div>
            <div className='pb-2'>
              <span className='text-lg'>Email:</span>
              <h4 className='text-[#d00035] text-2xl'>support@rdememe.com</h4>
            </div>
            <div className='pb-2'>
              <span className='text-lg'>Fax:</span>
              <h4 className='text-[#d00035] text-2xl'>+990-123-4567</h4>
            </div>
          </div>
          <div className='bg-white p-6'>
            <span className='text-2xl text-[#d00035] font-lobster pb-8'>Send us a message</span>
            <h1 className='text-4xl font-bold font-raleway'>Fill The Form Below</h1>
            <div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-2'>
                <input type="text" name="name" id="name" placeholder="Name" required class="w-full my-2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                <input type="text" name="name" id="name" placeholder="Email" required class="w-full my-2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-2'>
                <input type="text" name="name" id="name" placeholder="Phone" required class="w-full my-2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                <input type="text" name="name" id="name" placeholder="Subject" required class="w-full my-2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <input type="text" name="name" id="name" placeholder="Subject" required class="w-full h-[100px] my-2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
            </div>
            <div className='w-24 my-4'>
              <Button id="" type="button" label={"Submit"} abc="bg-[#d00035] text-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
      )
}

export default Contactform