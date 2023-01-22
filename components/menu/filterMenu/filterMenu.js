import { useState } from 'react';
import Styles from './filterMenu.module.css';
import Image from 'next/image';
import Menu from '..';
import ProjectsData from '../../../data/projects.json';
import TagsData from '../../../data/tags.json';

export default function FilterMenu(props) {
  const [viewAllProjects, setViewAllProjects] = useState(false);
  const [viewAllTags, setViewAllTags] = useState(false);

  return (
    <Menu styles={`${Styles.menuContainer} ${!props.isColumn ? Styles.filterSidebar : null}`} left={props.left} closeMenu={() => props.closeMenu()} title={
        <>
            {!props.isColumn && <Image src="./icons/filter.svg" alt="filter" width="15" height="15" />}
            <p>{props.isColumn ? 'Filter by' : 'Filters'}</p>
        </>
    }>
      <div className={`${Styles.contentContainer} ${!props.isColumn ? Styles.filterSidebarContainer : null}`}>
        <ul className={Styles.menuList}>
            <p className={Styles.heading}>Project</p>
            {!props.isColumn && <ListItem text="No Project Assigned" textStyles={Styles.projectName} />}
            {
              ProjectsData.slice(0, viewAllProjects ? ProjectsData.length : 4).map(project => (
                <ListItem key={`filterMenuItem-${project.name}`} text={project.name} textStyles={Styles.projectName} projectColor={project.color} />
              ))
            }
            {!viewAllProjects && ProjectsData.length > 4 && <button onClick={() => setViewAllProjects(true)} className={Styles.showAllButton}>Show all...</button>}
            {viewAllProjects && ProjectsData.length > 4 && <button onClick={() => setViewAllProjects(false)} className={Styles.showAllButton}>Show less...</button>}
        </ul>
        <ul className={Styles.menuList}>
            <p className={Styles.heading}>Tags</p>
            {!props.isColumn && <ListItem text="No Tags Added" textStyles={Styles.projectName} />}
            {
              TagsData.slice(0, viewAllTags ? TagsData.length : 4).map(tag => (
                <ListItem key={`filterMenuItem-${tag.name}`} styles={Styles.tagItem} text={tag.name} textStyles={Styles.tagName} textBackground={{ background: tag.color }} />
              ))
            }
            {!viewAllTags && TagsData.length > 4 && <button onClick={() => setViewAllTags(true)} className={Styles.showAllButton}>Show all...</button>}
            {viewAllTags && TagsData.length > 4 && <button onClick={() => setViewAllTags(false)} className={Styles.showAllButton}>Show less...</button>}
        </ul>
        {
          !props.isColumn
            ? <ul className={Styles.menuList}>
              <p className={Styles.heading}>Cards</p>
              <ListItem textStyles={Styles.projectName} text="Cards I created" />
              <ListItem textStyles={Styles.projectName} text="Cards assigned to me" />
              <ListItem textStyles={Styles.projectName} text="All Cards" />
            </ul>
            : null
        }
        <ul className={Styles.menuList}>
            <p className={Styles.heading}>Assigned to</p>
            {!props.isColumn && <ListItem text="Nobody Assigned" textStyles={Styles.projectName} />}
            {
              [0,1,2,3,4].map((teamMember, index) => (
                <li key={`menuTeamMemberItem-${index}`} className={Styles.teamMember}>
                  <input className={Styles.checkbox} type="checkbox" />
                  <Image className={Styles.memberImage} src="/team/team-member-7.png" alt="team-member" width="22" height="22" />
                  <p>Jane Cooper</p>
                </li>
              ))
            }
            <button className={Styles.showAllButton}>Show less...</button>
        </ul>
      </div>
      <div className={Styles.menuButtonsContainer}>
        {
          !props.isColumn
          && <div className={Styles.saveViewButtonContainer}>
            <button onClick={() => {
              props.closeMenu()
              props.openSaveViewModal();
            }} className={Styles.clearButton}>Save as view</button>
            
          </div>
        }
        <button onClick={() => props.closeMenu()} className={Styles.clearButton}>Clear</button>
        <button onClick={() => props.closeMenu()} className={Styles.applyButton}>Apply</button>
      </div>
    </Menu>
  )
}

const ListItem = (props) => (
  <li className={props.styles}>
    <input className={Styles.checkbox} type="checkbox" />
    {
      props.projectColor && <p className={Styles.projectColor} style={{ background: props.projectColor }} />
    }
    {
      props.image && <Image className={Styles.memberImage} src={props.image} alt="team-member" width="22" height="22" />
    }
    <p className={props.textStyles} style={props.textBackground || {}}>{props.text}</p>
  </li>
);
