import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	const btnClicked = (product) => {
		console.log(product.id);
		const newCart = [...cart, product];
		setCart(newCart);
	};

	return (
		<div className="shop-container">
			<div className="products-container">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						btnClicked={btnClicked}
					></Product>
				))}
			</div>
			<div className="cart-container">
				<h3>Total Bazar</h3>
				<h3>Id:{cart.length}</h3>
			</div>
		</div>
	);
};

export default Shop;
