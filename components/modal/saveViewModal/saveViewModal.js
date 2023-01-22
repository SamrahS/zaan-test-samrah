import { useState } from 'react';
import Styles from './saveViewModal.module.css';
import Image from 'next/image';
import Modal from '..';
import ColorPicker from '../../colorPicker';

export default function SaveViewModal(props) {
	const [selectedColor, setSelectedColor] = useState('#000')
	const [showColorPicker, setShowColorPicker] = useState(false);
	const [showTeamMenu, setShowTeamMenu] = useState(false);

  return (
    <Modal closeModal={() => props.closeModal()} title="Saved as view" titleIcon="save">
		<>
			<p className={Styles.inputLabel}>View Name</p>
			<div className={Styles.inputContainer}>
				<input className={Styles.inputField} type="text" placeholder='Enter name' />
				<div className={Styles.contentContainer} onClick={() => setShowColorPicker(!showColorPicker)}>
					<div className={Styles.colorContainer} style={{ background: selectedColor }}></div>
					<Image src="./icons/arrow-chevron.svg" alt="arrow" width="18" height="18" />
					{
						showColorPicker
						&& <ColorPicker closeMenu={(color) => {
							setShowColorPicker(false);
							
							if (color) {
								setSelectedColor(color);
							}
						}} setColor={(color) => setSelectedColor(color)} />
					}
				</div>
			</div>
			<p className={Styles.inputLabel}>Share with others</p>
			<div className={Styles.inputContainer}>
					<input className={Styles.inputField} type="text" placeholder='Enter or select name' onClick={() => setShowTeamMenu(!showTeamMenu)} />
					<div className={Styles.contentContainer} onClick={() => setShowTeamMenu(!showTeamMenu)}>
						<Image className={showTeamMenu ? Styles.openMenuIcon : null} src="./icons/arrow-chevron.svg" alt="arrow" width="18" height="18" />
					</div>
					{
						showTeamMenu
						&& <div className={Styles.teamMenu}>
							{
								[0,1,2,3,4].map((teamMember, index) => (
									<div key={`menuTeamMemberItem-${index}`} className={Styles.teamMember}>
										<input className={Styles.checkbox} type="checkbox" />
										<Image className={Styles.memberImage} src="/team/team-member-7.png" alt="team-member" width="22" height="22" />
										<p>Jane Cooper</p>
									</div>
								))
							}
						</div>
					}
			</div>
			<div className={Styles.buttonsContainer}>
				<div onClick={() => props.closeModal()}>Cancel</div>
				<div onClick={() => props.closeModal()}>Save</div>
			</div>
		</>
	</Modal>
  )
}
