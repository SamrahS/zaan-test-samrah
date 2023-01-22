import Styles from './navbar.module.css';
import Image from 'next/image';
import IconButton from '../iconButton';

export default function Navbar() {
  return (
    <div className={Styles.navbar}>
			<div className={Styles.navbarContent}>
				<div className={Styles.teamContainer}>
					<div className={Styles.teamMembers}>
						<Image src='/team/team-member-1.png' alt="team-member-1" width="28" height="28" />
						<p className={Styles.teamNumber1}>15</p>
						<hr className={Styles.separator} />
						<Image src='/team/team-member-2.png' alt="team-member-2" width="28" height="28" />
						<p className={Styles.teamNumber2}>11</p>
					</div>
					<IconButton styles={`${Styles.navButton} ${Styles.menubutton}`} src='./icons/arrow-chevron.svg' alt="arrow-down" width="22" height="22" />
				</div>
				<IconButton styles={Styles.navButton} src='./icons/suggestions.svg' alt="suggestions" width="24" height="24" />
				<IconButton styles={`${Styles.navButton} ${Styles.addButton}`} src='./icons/plus-white.svg' alt="plus-white" width="22" height="22" />
				<div className={Styles.searchInputContainer}>
					<Image src='./icons/search.svg' alt="search" width="20" height="20" />
					<input type="text" placeholder='Search' />
				</div>
				<IconButton styles={Styles.navButton} src='./icons/announcement.svg' alt="announcement" width="24" height="24" />
				<IconButton styles={Styles.navButton} src='./icons/calendar.svg' alt="calendar" width="24" height="24" />
				<IconButton styles={Styles.navButton} src='./icons/chat-with-alert.svg' alt="chat-with-alert" width="24" height="24" />
				<Image className={Styles.profileImage} src='/team/team-member-3.png' alt="team-member-1" width="38" height="38" />
			</div>
    </div>
  )
}
