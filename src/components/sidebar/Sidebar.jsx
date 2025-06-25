import './sidebar.css';
import {assets} from '../../assets/assets';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <img className="menu" src={assets.menu_icon} alt="" />
                <div className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    <p>New chat</p>
                </div>
                <div className='recent'>
                    <div className='recent-title'>Recents</div>
                    <div className='recent-entry'>
                        <img src={assets.message_icon} alt="" />
                        <p>What is react</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className='common'>
                    <img src={assets.question_icon} alt="" />
                    <p className='help'>Help</p>
                </div>
                <div className='common'>
                    <img src={assets.history_icon} alt="" />
                    <p className='activities'>Activity</p>
                </div>
                <div className='common'>
                    <img src={assets.setting_icon} alt="" />
                    <p className='settings'>Settings</p>
                </div>
            </div>
        </div>
    )
}




export default Sidebar
