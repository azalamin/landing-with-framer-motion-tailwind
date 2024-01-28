import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const DataRecovery = () => {
	const { componentRef, scaleValues, opacityValues } = useScrollGrow();
	return (
		<motion.div
			className='bg-light-gray h-[448px] col-span-12 md:col-span-6 lg:col-span-7 rounded-xl'
			style={{
				scale: scaleValues,
				opacity: opacityValues,
			}}
			ref={componentRef}
		>
			<div className='p-7'>
				<h4 className='text-xl font-semibold mb-16'>Data Recovery</h4>

				<p className='text-4xl leading-relaxed'>
					Lost your old memories ? <br />
					Lost your project? <br />
					Don’t worry, We will recover it for you
				</p>
			</div>
		</motion.div>
	);
};

export default DataRecovery;
