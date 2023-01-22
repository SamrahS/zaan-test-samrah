import { useState } from 'react';
import Image from 'next/image';
import Styles from './dropdown.module.css';

export default function Dropdown(props) {
	const [value, setValue] = useState(props.defaultText);
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className={Styles.dropdown} onClick={() => setShowMenu(true)}>
			<p className={value === props.defaultText ? Styles.placeholder : null}>{value}</p>
			<Image className={Styles.menuIcon} src='./icons/arrow-chevron.svg' alt="menu" width="17" height="17" />
			{
				showMenu
					? <div className={Styles.optionsContainer}>
						<div className={Styles.optionsOverlay} onClick={(e) => {
							e.stopPropagation();

							setShowMenu(false);
						}}></div>
						<div className={Styles.optionsMenu}>
							{
								props.data.map((item) => (
									<button key={item.name} onClick={(e) => {
										e.stopPropagation();

										setValue(item.name);
										setShowMenu(false);

										if (props.onInputChange) {
											props.onInputChange(item.id);
										}
									}}>
										{item.color && <p className={Styles.itemColor} style={{ background: item.color }} />}
										<p className={Styles.itemName}>{item.name}</p>
									</button>
								))
							}
						</div>
					</div>
					: null
			}
		</div>
	)
}
