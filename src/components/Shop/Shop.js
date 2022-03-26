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
		const newCart = [...cart, product];

		setCart(newCart);
	};
	const random = () => {
		const randomItem = cart[Math.floor(Math.random() * cart.length)];
		setCart([randomItem]);
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
				<div className="cartText">
					<h4>Total Bazar</h4>
					{cart.map((item) => (
						<p>Item: {item.name}</p>
					))}

					<button className="btn-clear" onClick={random}>
						Pick One
					</button>
					<button>Choose Again</button>
				</div>
			</div>
		</div>
	);
};

export default Shop;
