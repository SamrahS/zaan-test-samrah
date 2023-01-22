import Image from 'next/image';
import Styles from './card.module.css';
import { getProjectDetails, getTagDetails } from '../../utils';

export default function Card(props) {
  const project = getProjectDetails(props.card.project_ID);

  return (
    <div className={Styles.card}>
      <div className={Styles.projectContainer}>
        <div>
          <div className={Styles.projectColor} style={{ background: project.color }} />
          <p className={Styles.projectName}>{project.name}</p>
        </div>
        { props.card.type === 'USER' ? <Image src='./icons/userstar.svg' alt="user" width="14" height="14" /> : null }
        { props.card.type === 'FILE' ? <Image src='./icons/file-check.svg' alt="user" width="14" height="14" /> : null }
        { props.card.type === 'SEARCH' ? <Image src='./icons/user-lead.svg' alt="user" width="14" height="14" /> : null }
      </div>
      <p className={Styles.cardTitle}>{props.card.title}</p>
      <div className={Styles.tagsContainer}>
        {
          props.card.tags.map(tagID => {
            const tag = getTagDetails(tagID);

            return (<p className={Styles.tag} style={{ background: tag.color }} key={`tag-${tagID}`}>{tag.name}</p>)
          })
        }
      </div>
      <div className={Styles.iconsContainer}>
        <Image src='./icons/description.svg' alt="description" width="14" height="14" />
        {
          props.card.comments_count
            ? <>
              <Image src='./icons/message.svg' alt="comments" width="14" height="14" />
              <p>{props.card.comments_count}</p>
            </>
            : null
        }
        {
          props.card.total_taks
            ? <>
              <Image src='./icons/checklist-3.svg' alt="tasks completed" width="14" height="14" />
              <p>{props.card.tasks_completed}/{props.card.total_taks}</p>
            </>
            : null
        }
        {
          props.card.attachments
            ? <>
              <Image src='./icons/link.svg' alt="attachment" width="14" height="14" />
              <p>{props.card.attachments}</p>
            </>
            : null
        }
      </div>
      <div className={Styles.cardDetails}>
        <p>Created 3 days ago</p>
        <Image src={`/team/${props.card.created_by}.png`} alt="tasks completed" width="18" height="18" />
      </div>
      {
        props.archived
        && <div className={Styles.archiveInfo}>
          <Image src={`/team/${props.card.created_by}.png`} alt="tasks completed" width="15" height="15" />
          Archived in <span className={Styles.columnName}>Completed</span> 3 days ago
        </div>
      }
      {
        props.snoozed
        && <div className={Styles.archiveInfo}>
          <Image src={`/team/${props.card.created_by}.png`} alt="tasks completed" width="15" height="15" />
          Snoozed until <span className={Styles.columnName}>Oct 24 at 10:00 PM</span>
        </div>
      }
    </div>
  )
};