import Image from 'next/image';
import Styles from './iconButton.module.css';

export default function IconButton(props) {
	return (
		<button className={`${Styles.button} ${props.styles}`} onClick={() => {
			if (props.onClick) {
				props.onClick();
			}
		}}>
			<Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
			{props.text && <p>{props.text}</p>}
			{props.children}
		</button>
	)
}
