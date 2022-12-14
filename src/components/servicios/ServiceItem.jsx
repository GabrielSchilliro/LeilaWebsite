import React from 'react'

const ServiceItem = ({ icon, title, subtitle, description }) => {
	return (
		<div className='text-pink hover:text-white'>
			<div className="bg-black border-2 hover:bg-pink hover:border-0 hover:-translate-y-2 transform transition duration-200 rounded-md p-5">
				<div className=" w-6 h-6 mb-3 mx-auto">
					{icon}
				</div>
				<h1 className="font-semibold text-lg text-white mb-1 mx-auto">
					{title}
				</h1>
				<h1 className='font-semibold text-lg text-white mb-1 mx-auto'>
					{subtitle}
				</h1>
				<p className='text-white'>{description}</p>
			</div>
		</div>
	)
}

export default ServiceItem