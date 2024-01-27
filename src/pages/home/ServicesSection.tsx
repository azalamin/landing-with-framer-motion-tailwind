import Container from "@/components/Container";
import BatteryReplacement from "@/components/serviceTiles/BatteryReplacement";
import ChipReplacement from "@/components/serviceTiles/ChipReplacement";
import DataRecovery from "@/components/serviceTiles/DataRecovery";
import FreeDiagnostics from "@/components/serviceTiles/FreeDiagnostics";
import RemoteSupport from "@/components/serviceTiles/RemoteSupport";
import SameDayDelivery from "@/components/serviceTiles/SameDayDelivery";
import StorageReplacement from "@/components/serviceTiles/StorageReplacement";

const ServicesSection = () => {
	return (
		<Container className='my-40'>
			<div className='text-center flex justify-center items-center flex-col'>
				<h1>
					<span className='text-primary'>Services</span> that we provide.
				</h1>
				<p className='max-w-[80ch] text-lg mt-10 mb-20'>
					We provide various computer repair services and solutions for our new and regular
					customers. Feel free to find out more below.
				</p>
			</div>
			<div className='grid grid-cols-12 gap-5'>
				<BatteryReplacement />
				<ChipReplacement />
				<DataRecovery />
				<StorageReplacement />
				<SameDayDelivery />
				<FreeDiagnostics />
				<RemoteSupport />
			</div>
			<div className='mt-16 flex justify-center'>
				<button className='hover:text-primary transition-all'>Learn More</button>
			</div>
		</Container>
	);
};

export default ServicesSection;
