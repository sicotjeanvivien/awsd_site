import styles from "./Morpion.module.css";

const Case: React.ElementType = ({ value, onClick }) => {
    return (
        <div onClick={(e) => onClick(e)} data-index={value.index} className={styles.case}>{value.value}</div>
    )
}

export default Case;