import React from "react"
import styles from "./sidemenu.module.scss"

export default function SideMenu({
    showArchived,
    setAutoHideOn,
    setShowGoalsController,
    setShowNewTaskInput,
    setShowHabitController,
    setShowArchive }) {

    // const [autoHideOn, setAutoHideOn] = useState(false)

    function toggleCategoryTab() {
        setShowArchive(prev => !prev)
    }

    const menuItems = [{
        title: "New",
        emoji: "➕",
        onClick: () => setShowNewTaskInput(prev => !prev)
    }, {
        title: "Goals",
        emoji: "🎯",
        onClick: () => setShowGoalsController(prev => !prev)
    }, {
        title: "Habits",
        emoji: "🪤",
        onClick: () => setShowHabitController(prev => !prev)
    }, {
        title: "Archive",
        emoji: "🗄️",
        onClick: toggleCategoryTab
    }, {
        title: "Spotlight",
        emoji: "🔦",
        onClick: toggleCategoryTab
    }, {
        title: "Bin",
        emoji: "🗑️",
        onClick: () => { alert("no item in the bin") }
    }]

    function handlePinClick() {
        setAutoHideOn(prev => !prev)
    }

    const menuElements = menuItems.map((item, index) => {
        return <div key={index}
            className={styles.sideMenuItem}
            style={elementStyle}>
            <p className={styles.itemEmoji}>{item.emoji}</p>
            <p className={styles.itemTitle}>{item.title}</p>
        </div>
    })

    return <div className={styles.sideMenu}>
        {menuElements}
    </div>
}