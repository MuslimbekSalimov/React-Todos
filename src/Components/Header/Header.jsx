import React from 'react';
import "./Header.scss"

function Header({ children, id, handleDelete }) {
	return (
		<li>
			<span>{children}</span>
			<button data-todo-id={id} onClick={handleDelete}>
				Yop
			</button>
		</li>
	);
}

export default Header;