import React from "react";
import "./Product.css";

const Product = (props) => {
	const { name, img, category, price, id } = props.product;
	return (
		<div className="product">
			<img src={img} alt="" />
			<div className="productDetails">
				<p className="product-name">Name: {name}</p>
				<p>Category:{category}</p>
				<p>
					<small>Price: RM{price}</small>
				</p>
				<p>Id:{id}</p>
			</div>
			<button className="addCart">
				<p>Add To Cart</p>
			</button>
		</div>
	);
};

export default Product;
