import { useState } from 'react';
import Styles from './menuBar.module.css';
import Image from 'next/image';
import IconButton from '../iconButton';
import SortMenu from '../menu/sortMenu';
import FilterMenu from '../menu/filterMenu';
import ViewsMenu from '../menu/viewsMenu';
import PinnedCardsMenu from '../menu/pinnedCardsMenu';
import ArchivesMenu from '../menu/archivesMenu';
import SaveViewModal from '../modal/saveViewModal';
import DeleteFilterModal from '../modal/deleteFilterModal';

export default function MenuBar(props) {
	const [activeButtonIndex, setActiveButtonIndex] = useState(0);
	const [showSaveViewModal, setShowSaveViewModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [openMenu, setOpenMenu] = useState('');
	const projectButtonProps = (index) => ({
		className: activeButtonIndex === index ? Styles.activeButton : null,
		onClick: () => { setActiveButtonIndex(index); }
	});
	
	const menuButtonProps = (iconSize, styles, icon, name) => ({
		height: iconSize,
		width: iconSize,
		styles,
		src: `/icons/${icon}.svg`,
		alt: icon,
		onClick: () => toggleMenu(openMenu === name ? '' : name)
	});

	const toggleMenu = (name) => {
		setOpenMenu(name);

		props.setSortSpace(name === 'sort');
	};

	return (
		<div className={Styles.menuBarContainer}>
			<div className={Styles.menuBarContent}>
				<h3>Workflow</h3>
				<div className={Styles.projectButtonsContainer}>
					<button {...projectButtonProps(0)}>
						<Image src='./icons/workflow.svg' alt="workflow" width="20" height="20" />
						<Image src='./icons/workflow-white.svg' alt="workflow" width="20" height="20" />
					</button>
					<button {...projectButtonProps(1)}>
						<Image src='./icons/design.svg' alt="design" width="20" height="20" />
						<Image src='./icons/design-white.svg' alt="design" width="20" height="20" />
					</button>
					<button {...projectButtonProps(2)}>
						<Image src='./icons/code.svg' alt="code" width="20" height="20" />
						<Image src='./icons/code-white.svg' alt="code" width="20" height="20" />
					</button>
					<button {...projectButtonProps(3)}>
						<Image src='./icons/announcement.svg' alt="announcement" width="20" height="20" />
						<Image src='./icons/announcement-white.svg' alt="announcement" width="20" height="20" />
					</button>
				</div>
				<hr className={Styles.separator} />
				<div className={Styles.teamContainer}>
					<TeamMember number="2" imageSrc="/team/team-member-4.png" />
					<TeamMember number="5" imageSrc="/team/team-member-5.png" />
					<TeamMember number="1" imageSrc="/team/team-member-6.png" />
					<TeamMember number="4" imageSrc="/team/team-member-7.png" />
				</div>
			</div>
			<div className={Styles.menuButtonsContainer}>
				<IconButton {...menuButtonProps('20', Styles.iconButton, 'pinned', 'pinned')}>
					{ openMenu === 'pinned' && <PinnedCardsMenu closeMenu={() => toggleMenu('')} />}
				</IconButton>
				<IconButton {...menuButtonProps('20', Styles.iconButton, 'double-file', 'archive')}>
					{ openMenu === 'archive' && <ArchivesMenu closeMenu={() => toggleMenu('')} />}
				</IconButton>
				<IconButton {...menuButtonProps('15', Styles.iconButton, 'save', 'views')} text="Views">
					{ openMenu === 'views' && <ViewsMenu openDeleteModal={() => setShowDeleteModal(true)} closeMenu={() => toggleMenu('')} />}
				</IconButton>
				<IconButton {...menuButtonProps('15', Styles.filterButton, 'filter', 'filter')} text="Filter">
					{ openMenu === 'filter' && <FilterMenu openSaveViewModal={() => setShowSaveViewModal(true)} closeMenu={() => toggleMenu('')} isColumn={false} /> }
				</IconButton>
				<IconButton {...menuButtonProps('15', Styles.sortButton, 'sort-by', 'sort')} text="Sort by">
					{ openMenu === 'sort' && <SortMenu closeMenu={() => toggleMenu('')} /> }
				</IconButton>
			</div>
			{showSaveViewModal ? <SaveViewModal closeModal={() => setShowSaveViewModal(false)} /> : null}
			{showDeleteModal ? <DeleteFilterModal closeModal={() => setShowDeleteModal(false)} /> : null}
		</div>
	)
}

function TeamMember(props) {
	return (
		<div className={Styles.TeamMemberContainer}>
			<Image src={props.imageSrc} alt="team-member" width="30" height="30" />
			<p className={Styles.teamMemberCount}>{props.number}</p>
		</div>
	);
}
