import React from 'react'

const ServiceItem = ({ title, icon, description }) => {
	return (
		<div className="dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5">
			<div className="text-white w-6 h-6 mb-3 mx-auto">
				{icon}
			</div>
			<h1 className="font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1 mx-auto">
				{title}
			</h1>
			<p className="text-md text-white">{description}</p>
		</div>
	)
}

export default ServiceItem