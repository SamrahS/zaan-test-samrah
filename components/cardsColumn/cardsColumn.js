import { useState } from 'react';
import Image from 'next/image';
import Card from '../card';
import Dropdown from '../dropdown';
import IconButton from '../iconButton';
import Menu from '../menu';
import SortMenu from '../menu/sortMenu';
import FilterMenu from '../menu/filterMenu';
import Styles from './cardsColumn.module.css';
import ProjectsData from '../../data/projects.json';

export default function CardsColumn(props) {
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showListMenu, setShowListMenu] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardProject, setNewCardProject] = useState('');
  const addNewCard = () => {
    if (newCardTitle && newCardProject) {
      props.addNewCard(newCardTitle, newCardProject, props.column);
    }
  };
  const toggleMenu = (name, value) => {
    setShowFilterMenu(name === 'filter' ? value : false);
    setShowListMenu(name === 'list' ? value : false);
    setShowSortMenu(name === 'sort' ? value : false);

    props.setActiveColumn(value && name === 'sort' ? props.column : '');
    props.setFilterSpace(name === 'filter' ? value : false);
  };

  return (
    <div className={`
      ${Styles.mainContainer}
      ${props.active.length ? Styles.inactive : null}
      ${props.active === props.column ? Styles.active : null}
      ${props.filterSpace ? Styles.filterSpace : null}
      ${props.sortSpace ? Styles.sortSpace : null}
    `}>
      <div className={Styles.titleContainer}>
        <div className={Styles.titleContent}>
          <p className={Styles.title}>{props.title}</p>
          <p className={Styles.cardCount}>({props.cards.length})</p>
          <IconButton styles={Styles.filterButton} src='./icons/filter.svg' alt="filter" width="14" height="14" onClick={() => toggleMenu('filter', !showFilterMenu)}>
            { showFilterMenu && <FilterMenu isColumn={true} left={props.column === 'BACKLOG'} closeMenu={() => toggleMenu('filter', false)} /> }
          </IconButton>
          <IconButton styles={Styles.sortButton} src='./icons/sort-by.svg' alt="sort-by" width="14" height="14" onClick={() => toggleMenu('sort', !showSortMenu)}>
            { showSortMenu && <SortMenu left={props.column === 'BACKLOG'} closeMenu={() => toggleMenu('sort', false)} /> }
          </IconButton>
        </div>
        <IconButton styles={Styles.sortButton} src='./icons/menu-dot.svg' alt="menu" width="18" height="18" onClick={() => toggleMenu('list', !showListMenu)}>
          {
            showListMenu
            && <Menu left={props.column === 'BACKLOG'} closeMenu={() => toggleMenu('list', false)} title={<p>List Actions</p>}>
              <ul className={Styles.menuList}>
                <li>Move all cards in this list</li>
                <li>Archive all cards in this list</li>
              </ul>
            </Menu>
          }
        </IconButton>
      </div>
      <div className={Styles.cardsContainer}>
        {props.cards.map((card, index) => (<Card key={`card-${index}`} card={card} />))}
      </div>
      {
        showNewCardForm
          ? <div className={Styles.newCardContainer}>
            <div className={Styles.newCardTitleContainer}>
              <p>Card title</p>
              <Image onClick={() => setShowNewCardForm(false)} src='./icons/close.svg' alt="menu" width="14" height="14" />
            </div>
            <textarea value={newCardTitle} onChange={(e) => setNewCardTitle(e.target.value)} autoFocus placeholder="Enter card name" className={Styles.newCardNameInput} />
            <div className={Styles.newCardButtons}>
              <Dropdown data={ProjectsData} defaultText="Select Project" onInputChange={(value) => setNewCardProject(value)} />
              <button className={Styles.addButton} onClick={() => addNewCard()}>Add</button>
            </div>
          </div>
          : <IconButton styles={Styles.addCardButton} onClick={() => setShowNewCardForm(true)} src='./icons/plus.svg' alt="sort" width="20" height="20" text="Add Card" />
      }
    </div>
  )
};
  