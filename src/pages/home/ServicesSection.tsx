import Container from "@/components/Container";
import chipImg from "../../assets/images/chip.jpg";
import hardDriveCable from "../../assets/images/harddrivecable.png";
import tractPadImg from "../../assets/images/trackpad.png";

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
				<div
					className='bg-light-gray h-[448px] col-span-12 rounded-xl relative overflow-hidden w-full bg-contain bg bg-no-repeat bg-right-top bg-origin-content'
					style={{
						backgroundImage: `url(${tractPadImg})`,
					}}
				>
					<div className='p-7'>
						<h4 className='text-xl font-semibold mb-32'>Battery Replacement</h4>
						<p className='text-4xl leading-relaxed'>
							Get back to 100% battery health.
							<br />
							With 6 month replacement warranty.
						</p>
					</div>
				</div>
				<div
					className='bg-light-gray h-[448px] col-span-12 md:col-span-6 lg:col-span-5 rounded-xl bg-center bg-cover bg-blend-overlay'
					style={{
						backgroundImage: `url(${chipImg})`,
					}}
				>
					<div className='p-7'>
						<h4 className='text-xl font-semibold mb-16'>Chip Replacement </h4>

						<p className='text-4xl leading-relaxed'>
							There is no need to replace the motherboard for a tiny little dead chipset.
						</p>
					</div>
				</div>
				<div className='bg-light-gray h-[448px] col-span-12 md:col-span-6 lg:col-span-7 rounded-xl'>
					<div className='p-7'>
						<h4 className='text-xl font-semibold mb-16'>Data Recovery</h4>

						<p className='text-4xl leading-relaxed'>
							Lost your old memories ? <br />
							Lost your project? <br />
							Don’t worry, We will recover it for you
						</p>
					</div>
				</div>
				<div
					className='bg-light-gray h-[448px] col-span-12 rounded-xl relative overflow-hidden w-full bg-contain bg bg-no-repeat bg-right-top bg-origin-content'
					style={{
						backgroundImage: `url(${hardDriveCable})`,
					}}
				>
					<div className='p-7'>
						<h4 className='text-xl font-semibold mb-32'>Storage Replacement</h4>
						<p className='text-4xl leading-relaxed'>
							Get rid of your slow HDD,
							<br />
							upgrade to super fast SSD with ease
						</p>
					</div>
				</div>
				<div className='bg-light-gray h-[448px] col-span-12 md:col-span-6 lg:col-span-4 rounded-xl'></div>
				<div className='bg-light-gray h-[448px] col-span-12 md:col-span-6 lg:col-span-4 rounded-xl'></div>
				<div className='bg-light-gray h-[448px] col-span-12 lg:col-span-4 rounded-xl'></div>
			</div>
		</Container>
	);
};

export default ServicesSection;
