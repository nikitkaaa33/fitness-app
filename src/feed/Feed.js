import React, { useState, useEffect } from "react";
import "./feed.scss";
import feed1 from "../img/feed1.jpg";
import feed2 from "../img/feed2.jpg";
import feed3 from "../img/feed3.jpg";
import feed4 from "../img/feed4.jpg";

const Feed = () => {
	useEffect(() => {
		const imageContainers = document.querySelectorAll(".image-container");
		imageContainers.forEach((container, index) => {
			container.style.animationDelay = `${index * 0.5}s`;
			container.classList.add("appear");
		});
	}, []);

	return (
		<div className="image_wrapper2">
			<div className="image-container left">
				<img src={feed1} alt="Image 1" className="image2" />
			</div>
			<div className="image-container right">
				<img src={feed2} alt="Image 2" className="image2" />
			</div>
			<div className="image-container top">
				<img src={feed3} alt="Image 3" className="image2" />
			</div>
			<div className="image-container bottom">
				<img src={feed4} alt="Image 4" className="image2" />
			</div>
		</div>
	);
};

export default Feed;
