// Write your code here
/* appsList = [
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
    category: 'SOCIAL',
  }, */
import './index.css'

const AppItem = props => {
  const {eachapp} = props
  const {appName, imageUrl} = eachapp
  return (
    <li className="eachappContainer">
      <img src={imageUrl} className="appImage" alt={appName} />
      <p className="appname">{appName}</p>
    </li>
  )
}
export default AppItem
