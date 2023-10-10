import React, { useState } from 'react'
import hero from '../../../assets/images/hero.jpg'
import Button from '../../common/Button'

const HeroSection = ({action, handleAction}) => {
   
    return (
        
        <>
        <div className='w-full h-[520px] lg:h-full relative'>
            <img src={hero} className="w-full h-full object-cover" />
            <div className='max-w-7xl mx-auto px-4 lg:px-14 absolute top-[25%] xl:top-[30%] md:left-[40%] lg:left-[50%]'>
                <div className='max-w-xl'>
                    <h1 className='text-[32px] text-white font-lobster'>Tatse Our</h1>
                    <h2 className='text-[50px] font-lobster text-white'>
                        <span className='text-[#d00035] font-bold'>Contrary Popular</span>
                        <span className='block'>Vintage Wine</span>
                    </h2>
                    <p className='text-base font-raleway text-white tracking-wider'>
                        It is a long lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <div className='w-36'>
                        <Button id="" type="button" label={"Shop Now"} abc="bg-white rounded-full"></Button>
                    </div>
                </div>
            </div>
            {action?<Login handleAction={handleAction}/>:""}
           
        </div>
        </>
    )
}

const Login=({handleAction})=>{
	return(
		<div>
			<form className="pop-up-from">
                <button className='pop-up-close' onClick={()=>handleAction(false)}>X</button> 
				<div> 
					<label className='box' htmlFor="email">Email :-</label>
					<input className='bv' type="text" name="email" id="email" placeholder=' email...'/> 
				</div> 
                <br/>
				<div> 
					<label className='box' htmlFor="passw">Password :-</label>
					<input className='bv' type="text" name="passw" id="passw" placeholder=' password...'/> 
				</div>  
                <br/>
				<button className='box1' type="submit">submit</button>
			</form>
            <div className='overlay'></div>
		</div>
	)
}

export default HeroSection