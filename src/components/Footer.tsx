import Link from "next/link";
import React from "react";
import {FaInstagram, FaYoutube, FaFacebook} from "react-icons/fa";

const mailbox = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="size-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
		/>
	</svg>
);

const Footer = () => {
	return (
		<footer className="bg-gray-100 py-8 sm:py-12">
			<div className="container mx-auto">
				<div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 justify-center text-center">
					<div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
						<h5 className="text-lg font-medium mb-6">Terms & Policies</h5>
						<ul className="list-none text-xs space-y-4">
							<li className="mb-2">
								<Link href="#" className="border-b border-solid border-transparent">
									Privacy Policy
								</Link>
							</li>
							<li className="mb-2">
								<Link href="#" className="border-b border-solid border-transparent">
									Terms of Service
								</Link>
							</li>
							<li className="mb-2">
								<Link href="#" className="border-b border-solid border-transparent">
									Return Policy
								</Link>
							</li>
							<li className="mb-2">
								<Link href="#" className="border-b border-solid border-transparent">
									Blogs
								</Link>
							</li>
							<li className="mb-2">
								<Link href="#" className="border-b border-solid border-transparent">
									Sitemap
								</Link>
							</li>
						</ul>
					</div>

					<div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
						<h5 className="text-lg font-medium mb-6 text-center">Company Info</h5>
						<ul className="list-none text-xs space-y-4">
							<li className="mb-2">
								<Link href="#" className="border-b border-solid border-transparent ">
									Shipping Info
								</Link>
							</li>
							<li className="mb-2">
								<Link href="#" className="border-b border-solid border-transparent ">
									Payment Policy
								</Link>
							</li>
							<li className="mb-2">
								<Link href="#" className="border-b border-solid border-transparent ">
									Contact Us
								</Link>
							</li>
							<li className="mb-2">
								<Link href="#" className="border-b border-solid border-transparent ">
									Track Order
								</Link>
							</li>
						</ul>
					</div>

					<div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
						<h5 className="text-lg font-medium mb-6">Customer Support</h5>
						<ul className="list-none text-xs space-y-4">
							<li className="mb-2">
								<Link href="#" className="border-b border-solid border-transparent ">
									Chat Support
								</Link>
							</li>
							<li className="mb-2">
								<Link href="#" className="border-b border-solid border-transparent ">
									Help Center
								</Link>
							</li>
							<li className="mb-2">
								<Link href="#" className="border-b border-solid border-transparent ">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					<div className="px-4 mt-4 sm:w-1/3 xl:w-1/3 sm:mx-auto xl:mt-0 gap-4 xl:ml-auto flex-col flex items-center">
						<div className="flex sm:justify-center xl:justify-start gap-5 text-gray-600 items-center">
							<Link href="">
								<FaFacebook size={25} />
							</Link>
							<Link href="">
								<FaInstagram size={25} />
							</Link>
							<Link href="">
								<FaYoutube size={25} />
							</Link>
						</div>
						<div className="space-y-4">
							<h5>SIGN UP AND SAVE</h5>
							<p className="text-xs">
								Sign up now and be the first to know about exclusive offers, latest
								fashion trends & style tips!
							</p>
							<label htmlFor="" className="flex relative">
								<input
									type="text"
									className="w-full text-gray-500 bg-transparent border-b p-2 outline-none placeholder:text-xs placeholder:tracking-widest"
									placeholder="Enter your email"
								/>
								<div className="absolute right-1 bottom-2 text-gray-400">{mailbox}</div>
							</label>
						</div>
					</div>
				</div>

				<div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
					<div className="w-full px-4">
						<strong>Flaming Moth</strong>
						<p className="mb-4 text-xs">
							<strong>Customer Care:</strong> (Mon to Sat 10:30AM and 5:30PM) <br />
							<strong>E-mail:&nbsp;</strong>support@flamingmoth.com | +91 73539 41416
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
