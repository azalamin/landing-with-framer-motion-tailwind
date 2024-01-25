import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const NavBar = () => {
	return (
		<header className='h-16'>
			<nav className='bg-green-500 h-full w-full px-[20px] max-w-[1220px] mx-auto flex justify-between items-center'>
				<span className='text-3xl'>iRepair</span>
				<ul className='space-x-5'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<Button>
						<NavLink to='/login'>Login</NavLink>
					</Button>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;