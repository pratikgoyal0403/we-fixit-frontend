import React from "react";

const Container = ({ responsive, className, children }) => {
	return (
		<div
			className={`${
				responsive ? `${responsive}:` : ""
			}container px-4 mx-auto ${className}`}
		>
			{children}
		</div>
	);
};

export default Container;
