import { useState } from 'react';
import MenuBar from '../menuBar';
import CardsColumn from '../cardsColumn';
import Styles from './tasksContainer.module.css';
import CardsData from '../../data/cards.json';

export default function TasksContainer() {
  // The functionality would ideally happen through an API in real scenario, Which would take care of static data in this case
  const [activeColumn, setActiveColumn] = useState('');
  const [showFilterSpace, setShowFilterSpace] = useState(false);
  const [showSortSpace, setShowSortSpace] = useState(false);
  const [cards, setCards] = useState(CardsData);
  const columnProps = (column, title) => ({
    column,
    title,
    active: activeColumn,
    filterSpace: showFilterSpace,
    sortSpace: showSortSpace,
    cards: cards.filter(card => card.column === column),
    setActiveColumn: (columnName) => { setActiveColumn(columnName); },
    setFilterSpace: (value) => { setShowFilterSpace(value); },
    addNewCard: (title, project, column) => {
      setCards((oldCards) => ([
          ...oldCards,
          {
            "title": title,
            "project_ID": project,
            "tags": [],
            "created_by": "team-member-3",
            "comments_count": 0,
            "tasks_completed": 0,
            "total_taks": 0,
            "attachments": 0,
            "type": "",
            "column": column
          }
        ])
      )
    }
  });

    return (
      <>
        <MenuBar setSortSpace={(value) => { setShowSortSpace(value); }} />
        <div key={cards} className={Styles.columnsContainer}>
          <CardsColumn {...columnProps("BACKLOG", "Backlog")} />
          <CardsColumn {...columnProps("TO_DO", "To Do")} />
          <CardsColumn {...columnProps("IN_PROCESS", "In Process")} />
          <CardsColumn {...columnProps("IN_REVIEW", "In Review")} />
          <CardsColumn {...columnProps("COMPLETED", "Completed")} />
        </div>
      </>
    )
  }
  