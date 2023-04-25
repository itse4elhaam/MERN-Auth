import React from 'react'
import { Link } from "react-router-dom";
import "../tailwind.css";

function homepage() {
  return (
		<>
			<div className="bg-gray-100 font-sans leading-normal tracking-normal">
				<div className="flex flex-col h-screen justify-center items-center">
					<h1 className="text-4xl font-bold mb-4 text-gray-800">
						Welcome to MERN login
					</h1>
					<div className="flex space-x-6">
						<Link
							to="/login"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 ease-in-out duration-300"
						>
							Login
						</Link>
						<Link
							to="/signup"
							className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 ease-in-out duration-300"
						>
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</>
  );
}

export default homepage