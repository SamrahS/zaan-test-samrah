import Styles from './modal.module.css';
import Image from 'next/image';

export default function SaveViewModal(props) {
  return (
    <div className={Styles.modal} onClick={() => props.closeModal()}>
			<div className={Styles.modalContent} onClick={(e) => {
				e.stopPropagation()
			}}>
				<div className={Styles.header}>
					<div>
						{props.titleIcon && <Image className={Styles.titleButton} src={`./icons/${props.titleIcon}.svg`} alt={props.titleIcon} width="17" height="17" />}
						<p>{props.title}</p>
					</div>
					<Image onClick={() => props.closeModal()} className={Styles.titleButton} src="./icons/close-dark.svg" alt="close" width="17" height="17" />
				</div>
				<div className={Styles.modalBody}>
					{props.children}
				</div>
			</div>
    </div>
  )
}
