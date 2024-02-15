import React from "react"
import styles from "./sidemenu.module.css"

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
        title: "Counter",
        emoji: "⏰",
        onClick: () => setShowGoalsController(prev => !prev)
    }, {
        title: "Calculator",
        emoji: "🧮",
        onClick: () => setShowHabitController(prev => !prev)
    }, {
        title: "Text editor",
        emoji: "📄",
        onClick: toggleCategoryTab
    }, {
        title: "Bin",
        emoji: "🗑️",
        onClick: () => { alert("no item in the bin") }
    }]


    const menuElements = menuItems.map((item, index) => {
        return <div key={index}
            className={styles.sideMenuItem}
        >
            <p className={styles.itemEmoji}>{item.emoji}</p>
            <p className={styles.itemTitle}>{item.title}</p>
        </div>
    })

    return <div className={styles.sideMenu}>
        {menuElements}
    </div>
}