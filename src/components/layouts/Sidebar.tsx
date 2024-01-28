import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className='bg-light-gray h-screen col-span-2 sticky top-0 left-0 overflow-auto p-5'>
			<nav className='flex flex-col gap-2'>
				<NavLink
					to='/admin/dashboard'
					className={({ isActive }) =>
						cn(
							"bg-gray p-3 hover:bg-dark-gray hover:text-white transition-all rounded-md flex items-center gap-2",
							{ "bg-dark-gray text-white": isActive }
						)
					}
				>
					<LayoutDashboard className='shrink-0' /> <span className='truncate'>Dashboard</span>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						cn(
							"bg-gray p-3 hover:bg-dark-gray hover:text-white transition-all rounded-md flex items-center gap-2",
							{ "bg-dark-gray text-white": isActive }
						)
					}
					to='/admin/service-list'
				>
					<LayoutDashboard className='shrink-0' /> <span className='truncate'>Service List</span>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						cn(
							"bg-gray p-3 hover:bg-dark-gray hover:text-white transition-all rounded-md flex items-center gap-2",
							{ "bg-dark-gray text-white": isActive }
						)
					}
					to='/admin/add-service'
				>
					<LayoutDashboard className='shrink-0' /> <span className='truncate'>Add Service</span>
				</NavLink>
			</nav>
		</aside>
	);
};

export default Sidebar;
