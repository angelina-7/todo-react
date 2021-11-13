import styles from './TodoListItem.module.css'

export default function TodoListItem({
    id,
    children: text,
    isDone,
    onDelete,
    onClick,
    color,
}) {

    let classNames = [styles['list-item']];
    if(isDone) classNames.push(styles['done'])
    return (
        <li style = {{color}} className = {classNames.join(' ')}>
            <button id = "check" onClick = {() => onClick(id)}>&#10004;</button>
            <button id = "delete" onClick = {() => onDelete(id)}>&#10008;</button>
            {text.startsWith('did') || isDone
                ? <del>{text}</del>
                : text
            }
        </li>
    );
}