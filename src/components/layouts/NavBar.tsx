import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const NavBar = () => {
	return (
		<motion.header
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				delay: 1,
				duration: 1,
			}}
			className='h-16 fixed w-full z-[999] bg-white'
		>
			<nav className='h-full w-full px-[20px] max-w-[1230px] mx-auto flex justify-between items-center'>
				<span className='text-3xl'>iRepair</span>
				<ul className='space-x-5'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<Button>
						<NavLink to='/login'>Login</NavLink>
					</Button>
				</ul>
			</nav>
		</motion.header>
	);
};

export default NavBar;
