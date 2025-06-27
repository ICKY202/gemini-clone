import { useContext, useState } from 'react';
import './sidebar.css';
import {assets} from '../../assets/assets';
import { context } from '../../context/context';


function Sidebar() {
    const [extended, setExtended] = useState(false);
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(context);
    const loadPrompt = async (prompt) => {
        await onSent(prompt);
    }
    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(!extended)} className="menu" src={assets.menu_icon} alt="" />
                <div onClick={() => newChat()} className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    {extended && <p>New chat</p>}
                </div>
                {extended && <div className='recent'>
                    <div className='recent-title'>Recents</div>
                        {prevPrompts.map((item, ind) => {
                            return <div onClick={() => {
                                setRecentPrompt(item);
                                loadPrompt(item);
                            }} key={ind} className='recent-entry'>
                            <img src={assets.message_icon} alt="" />
                            <p>{item.slice(0, 18)}...</p>
                        </div>
                        })}
                </div>}
            </div>
            <div className="bottom">
                <div className='common'>
                    <img src={assets.question_icon} alt="" />
                    {extended && <p className='help'>Help</p>}
                </div>
                <div className='common'>
                    <img src={assets.history_icon} alt="" />
                    {extended && <p className='activities'>Activity</p>}
                </div>
                <div className='common'>
                    <img src={assets.setting_icon} alt="" />
                    {extended && <p className='settings'>Settings</p>}
                </div>
            </div>
        </div>
    )
}




export default Sidebar
