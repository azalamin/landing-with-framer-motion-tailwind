import { motion } from "framer-motion";
import tractPadImg from "../../assets/images/trackpad.png";
import useScrollGrow from "../../hooks/useScrollGrow";

const BatteryReplacement = () => {
	const { componentRef, scaleValues, opacityValues } = useScrollGrow();
	return (
		<motion.div
			className='bg-light-gray h-[448px] col-span-12 rounded-xl relative overflow-hidden w-full bg-contain bg bg-no-repeat bg-right-top bg-origin-content'
			style={{
				backgroundImage: `url(${tractPadImg})`,
				scale: scaleValues,
				opacity: opacityValues,
			}}
			ref={componentRef}
		>
			<div className='p-7'>
				<h4 className='text-xl font-semibold mb-32'>Battery Replacement</h4>
				<p className='text-4xl leading-relaxed'>
					Get back to 100% battery health.
					<br />
					With 6 month replacement warranty.
				</p>
			</div>
		</motion.div>
	);
};

export default BatteryReplacement;
