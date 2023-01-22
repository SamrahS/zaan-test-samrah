import Styles from './sortMenu.module.css';
import Image from 'next/image';
import Menu from '..';

export default function SortMenu(props) {
  return (
    <Menu left={props.left} closeMenu={() => props.closeMenu()} title={
        <>
            <Image src="./icons/sort-by.svg" alt="sort-by" width="20" height="20" />
            <p>Sort by</p>
        </>
    }>
        <ul className={Styles.menuList}>
            <li onClick={() => props.closeMenu()}>Order</li>
            <li onClick={() => props.closeMenu()}>Created date</li>
            <li onClick={() => props.closeMenu()}>Due date</li>
            <li onClick={() => props.closeMenu()}>Sitting count</li>
            <li onClick={() => props.closeMenu()}>Move count</li>
        </ul>
    </Menu>
  )
}
