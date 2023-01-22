import Styles from './deleteFilterModal.module.css';
import Modal from '..';

export default function DeleteFilterModal(props) {
  return (
    <Modal closeModal={() => props.closeModal()} title="Delete">
		<>
			<p className={Styles.deleteText}>Are you sure you want to delete this Filter?</p>
			<div className={Styles.buttonsContainer}>
				<div onClick={() => props.closeModal()}>Cancel</div>
				<div onClick={() => props.closeModal()}>Delete</div>
			</div>
		</>
	</Modal>
  )
}
