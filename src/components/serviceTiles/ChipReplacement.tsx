import { motion } from "framer-motion";
import chipImg from "../../assets/images/chip.jpg";
import useScrollGrow from "../../hooks/useScrollGrow";

const ChipReplacement = () => {
	const { componentRef, scaleValues, opacityValues } = useScrollGrow();
	return (
		<motion.div
			className='bg-light-gray h-[448px] col-span-12 md:col-span-6 lg:col-span-5 rounded-xl bg-center bg-cover bg-blend-overlay'
			style={{
				backgroundImage: `url(${chipImg})`,
				scale: scaleValues,
				opacity: opacityValues,
			}}
			ref={componentRef}
		>
			<div className='p-7'>
				<h4 className='text-xl font-semibold mb-16'>Chip Replacement </h4>

				<p className='text-4xl leading-relaxed'>
					There is no need to replace the motherboard for a tiny little dead chipset.
				</p>
			</div>
		</motion.div>
	);
};

export default ChipReplacement;
