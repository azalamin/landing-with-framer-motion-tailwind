import hardDriveCable from "../../assets/images/harddrivecable.png";

const StorageReplacement = () => {
	return (
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
	);
};

export default StorageReplacement;
