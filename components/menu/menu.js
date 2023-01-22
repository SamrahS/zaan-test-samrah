import Styles from './menu.module.css';
import Image from 'next/image';

export default function Menu(props) {
  return (
    <div className={`${Styles.menu} ${props.styles} ${props.left ? Styles.leftAlign : null}`} onClick={(e) => {
			e.stopPropagation();
    }}>
			<Image onClick={() => props.closeMenu()} className={Styles.closeButton} src="./icons/close-dark.svg" alt="close" width="17" height="17" />
			<div className={Styles.titleContainer}>
				{props.title}
			</div>
			{props.children}
    </div>
  )
}
