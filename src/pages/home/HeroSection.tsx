import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import macImg from "../../assets/images/macbook-exposed.png";

const intro = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.25,
			delayChildren: 1,
		},
	},
};

const introChildren = {
	hidden: {
		opacity: 0,
		y: -200,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			type: "spring",
			// stiffness: 120,
			bounce: 0.5,
		},
	},
};

const laptop = {
	initial: {
		y: 0,
		rotate: 0,
		scale: 5,
	},
	animate: {
		y: 20,
		rotate: -30,
		scale: 1,
		transition: {
			duration: 1,
			y: {
				duration: 2,
				repeat: Infinity,
				repeatType: "reverse",
				ease: "easeInOut",
			},
		},
	},
};

const HeroSection = () => {
	return (
		<div className='overflow-hidden'>
			<Container className='h-screen grid grid-cols-1 lg:grid-cols-2 place-content-center pt-16'>
				<motion.div variants={intro} initial='hidden' animate='visible' className=''>
					<motion.h1
						variants={introChildren}
						className='text-5xl lg:text-8xl font-bold text-nowrap'
					>
						<span className='text-gray'>Don't worry,</span>
						<br />
						<span>We'll fix it.</span>
					</motion.h1>
					<motion.p
						variants={introChildren}
						className='text-dark-gray max-w-[50ch] text-lg mt-16 mb-6'
					>
						Welcome to <span className='text-primary-foreground font-semibold'>iRepair</span>, your
						one-stop place for all kinds of
						<span className='text-primary-foreground font-semibold'> Macbook repairs</span> and
						diagnostics.
					</motion.p>
					<motion.div variants={introChildren}>
						<Button>Book a service</Button>
					</motion.div>
				</motion.div>
				<motion.div
					variants={laptop}
					initial='initial'
					animate='animate'
					className='mt-10 w-3/4 lg:w-full mx-auto'
				>
					<img className='h-[95%] object-contain' src={macImg} alt='' />
				</motion.div>
			</Container>
		</div>
	);
};

export default HeroSection;
