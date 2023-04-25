import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepg";
import Login from "./pages/login";
import SignUp from "./pages/signUp";

export default function app() {
	return (
		<Routes>
			<Route path="/" exact element = {<HomePage />} />
			<Route path="/login" exact element = {<Login />} />
			<Route path="/signup" exact element = {<SignUp />} />
		</Routes>
	);
}
