import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle';
import services from '../../data/Services';
import ServiceItem from './ServiceItem';

const Servicios = () => {
	return (
		<div className="py-12 px-4 text-center container mx-auto" id='servicios'>
			<SectionTitle>Servicios</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
				{services.map(service => (
					<ServiceItem
						key={service.title}
						title={service.title}
						icon={service.icon}
						description={service.description}
					/>
				))}
			</div>
		</div>
	)
}

export default Servicios