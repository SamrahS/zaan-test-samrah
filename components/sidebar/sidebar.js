import { useState } from 'react';
import Styles from './sidebar.module.css';
import Image from 'next/image';
import IconButton from '../iconButton';

export default function Sidebar() {
	const links = [
		{ name: 'Dashboard', icon: 'dashboard' },
		{ name: 'Workflow', icon: 'workflow' },
		{ name: 'Calendar',  icon: 'calendar' },
		{ name: 'SocialRM',  icon: 'social-media' },
		{ name: 'Metrics',  icon: 'analytic' },
		{ name: 'Leads', icon: 'user-lead' },
		{ name: 'Users', icon: 'userstar' },
		{ name: 'Notifications', icon: 'notifications' },
		{ name: 'Documents', icon: 'documents' },
		{ name: 'Segments', icon: 'segments' }
	];
	const [showSidebar, setShowSidebar] = useState(true);
	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	}

	return (
		<div className={`${Styles.sidebarContainer} ${showSidebar ? null : Styles.collapsed}`} onClick={() => {
			if (!showSidebar) {
				setShowSidebar(true);
			}
		}}>
			<div className={Styles.titleContainer}>
				<div className={Styles.companyNameContainer}>
					<div className={Styles.companyCircle} />
						{
							showSidebar
								? <>
									<p className={Styles.companyName}>Zaan Corp</p>
									<Image className={Styles.menuIcon} src='./icons/arrow-chevron.svg' alt="menu" width="17" height="17" />
								</>
								: null
						}
					</div>
				{
					showSidebar
						? <IconButton styles={Styles.toggleButton} onClick={toggleSidebar} src='./icons/double-arrow.svg' alt="toggle" width="20" height="20" />
						: null
				}
			</div>
				<div className={Styles.linksContainer}>
					{
						links.map((link, index) => (
							<div key={`sidebar_link_${index}`} className={`${Styles.link} ${link.name === 'Workflow' ? Styles.active : null}`}>
								<Image src={`./icons/${link.icon}.svg`} alt={link.name} height="22" width="22" />
								{showSidebar ? <p className={Styles.sidebarLink}>{link.name}</p> : null}
								{
									link.name === 'Notifications' ? <div className={Styles.notificationDot} /> : null
								}
							</div>
						))
					}
				</div>
				{
					showSidebar
						? <div className={`${Styles.link} ${Styles.companyLink}`}>
							<Image src="./icons/file-check.svg" alt="Company" height="22" width="22" />
							<p className={Styles.sidebarLink}>Company</p>
						</div>
						: null
				}
			</div>
	)
}
