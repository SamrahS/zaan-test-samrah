import Styles from './pinnedCardsMenu.module.css';
import Image from 'next/image';
import Menu from '..';
import Card from '../../card';
import CardsData from '../../../data/cards.json';

export default function PinnedCardsMenu(props) {
  return (
    <Menu closeMenu={() => props.closeMenu()} title={
        <>
            <Image src="./icons/pinned.svg" alt="pinned" width="20" height="20" />
            <p>Pinned Card</p>
        </>
    }>
      <div className={Styles.searchContainer}>
        <Image src="./icons/search.svg" alt="search" width="18" height="18" />
        <input type="text" placeholder="Search" />
      </div>
      <div className={Styles.cardsContainer}>
        { CardsData.slice(0, 5).map((card, index) => (<Card key={`card-${index}`} card={card} />)) }
      </div>
    </Menu>
  )
}
