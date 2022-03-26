import React from "react";
import "./Product.css";

const Product = (props) => {
	const { name, img, category, price, id } = props.product;
	return (
		<div className="product">
			<img src={img} alt="" />
			<p className="product-name">Name: {name}</p>
			<h4>Category:{category}</h4>
			<small>Price: RM{price}</small>

			<h5>Id:{id}</h5>
		</div>
	);
};

export default Product;
