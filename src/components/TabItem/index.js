// Write your code here
import './index.css'

const TabItem = props => {
  const {eachtab, isActive, oncliktabitem} = props
  const {displayText, tabId} = eachtab
  const classnamestyle = isActive ? `button active` : `button`
  console.log(isActive)
  console.log(classnamestyle)

  const clicktab = () => oncliktabitem(tabId)

  return (
    <li className="eachtabItem" onClick={clicktab}>
      <button type="button" className={classnamestyle}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
