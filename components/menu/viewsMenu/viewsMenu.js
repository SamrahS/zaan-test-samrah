import { useState } from 'react';
import Styles from './viewsMenu.module.css';
import Image from 'next/image';
import Menu from '..';

export default function ViewsMenu(props) {
  
  const views = [
    {
      text: 'My first filter',
      color: '#6248FF'
    },{
      text: 'Available for me',
      color: '#FF3477'
    },{
      text: 'Current Tasks',
      color: '#27E1BF'
    },{
      text: 'Top Project',
      color: '#FF9F1A'
    },{
      text: 'Favorites',
      color: '#34CEFF'
    }
  ];

  return (
    <Menu closeMenu={() => props.closeMenu()} title={
        <>
            <Image src="./icons/save.svg" alt="views" width="20" height="20" />
            <p>Views</p>
        </>
    }>
        <ul className={Styles.menuList}>
          {
            views.map(view => (
              <li key={`viewsMenuItem-${view.text}`} onClick={() => props.closeMenu()}>
                <div>
                  <p className={Styles.viewColor} style={{ background: view.color }}></p>
                  <p className={Styles.viewName}>{view.text}</p>
                </div>
                {
                  view.text === 'Current Tasks'
                  && <Image onClick={() => props.openDeleteModal()} src="./icons/delete.svg" alt="delete" width="13" height="13" />
                }
              </li>
            ))
          }
        </ul>
    </Menu>
  )
}
