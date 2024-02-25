import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
export default function Header() {
	const [navigation, setNavigation] = useState([
		{ name: "Home", href: "/", current: true },
		{ name: "Itinery", href: "/Itinary", current: false },
		{ name: "Competition", href: "/Competition", current: false },
		{ name: "Sponsors", href: "/Sponsors", current: false },
		
	
	]);
	const { pathname } = useLocation();	  

	useEffect(() => {
		setNavigation((prev) => {
				return [...prev].map((item) => {
					return { ...item, current: pathname === item.href && !item.current };
				});
			});
	  }, [pathname])

	return (
		<Disclosure as="nav" className="bg-[#000000] ">
			{({ open }) => (
				<>
					<div className="mx-auto my-2 max-w-7xl px-2 sm:px-6 lg:px-8  ">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-yellow-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="h-12 w-auto pr-5"
										src={process.env.PUBLIC_URL + "/images/home/Logo-main.png"}
										alt="Your Company"
									/>
								</div>
								<div className="hidden sm:ml-8 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												className={classNames(
													item.current
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-yellow-700 hover:text-white",
													"rounded-md px-3 py-2 text-sm font-medium"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
	{/* insert g-form*/}	<a href="#"> 
							    <button className="text-white text-base btn-res  hover:bg-[#f9b550] font-mono font-semibold rounded-full px-5 lg:px-4 py-2 bg-[#cda160]">
													REGISTER
								</button>	
							</a>							
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden navfont font-bold">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as = "a"
								>
									<Link
										to={item.href}
										className={classNames(
											item.current
												? "bg-yellow-800 text-white"
												: "text-gray-300 hover:bg-yellow-700 hover:text-white",
											"block rounded-md px-3 py-2 text-base font-medium"
										)}
										aria-current={item.current ? "page" : undefined}
									>
									{item.name}
									</Link>
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
