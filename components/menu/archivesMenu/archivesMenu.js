import { useState } from 'react';
import Styles from './archivesMenu.module.css';
import Image from 'next/image';
import Menu from '..';
import Card from '../../card';
import CardsData from '../../../data/cards.json';

export default function ArchivesMenu(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <Menu closeMenu={() => props.closeMenu()} title={
        <>
            <div onClick={() => setActiveTabIndex(0)} className={`${Styles.tabButton} ${activeTabIndex === 0 ? Styles.activeTab : null}`}>
              <Image src={`./icons/${activeTabIndex === 0 ? 'archive-white' : 'archive'}.svg`} alt="archive" width="15" height="15" />
              <p>Archive</p>
            </div>
            <div onClick={() => setActiveTabIndex(1)} className={`${Styles.tabButton} ${activeTabIndex === 1 ? Styles.activeTab : null}`}>
              <Image src={`./icons/${activeTabIndex === 1 ? 'snooze-white' : 'snooze'}.svg`} alt="snooze" width="15" height="15" />
              <p>Snooze</p>
            </div>
        </>
    }>
      <div className={Styles.searchContainer}>
        <Image src="./icons/search.svg" alt="search" width="18" height="18" />
        <input type="text" placeholder="Search" />
      </div>
      <div className={Styles.cardsContainer}>
        {
          activeTabIndex === 0
            ? CardsData.slice(0, 4).map((card, index) => (<Card key={`card-${index}`} card={card} archived={true} />))
            : CardsData.slice(0, 4).reverse().map((card, index) => (<Card key={`card-${index}`} card={card} snoozed={true} />))
        }
      </div>
    </Menu>
  )
}
