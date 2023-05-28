import React from "react";
import { CSSTransition } from "react-transition-group";
import "./PageTransition.css";

const PageTransition = ({ children, ...props }) => (
	<CSSTransition classNames="page" timeout={500} {...props}>
		{children}
	</CSSTransition>
);

export default PageTransition;
