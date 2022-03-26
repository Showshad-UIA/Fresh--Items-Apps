import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
	const { product, btnClicked } = props;
	const { name, img, category, price, id } = product;

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
			<button onClick={() => btnClicked(product)} className="addCart">
				<p className="cartText">Add To Cart</p>
				<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default Product;
