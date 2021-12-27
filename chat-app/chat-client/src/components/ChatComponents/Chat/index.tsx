/* eslint-disable react-hooks/exhaustive-deps */

/*  Modules */
import { useLocation } from 'react-router-dom'; // React Router Hook
import { useEffect } from 'react'; // React Hook

/* Context */
import { useMessage } from '../../../context/MessageContext';

/* Socket API */
import { init, addMessage } from '../../../api/socketApi';

/* Components */
import ChatHeader from '../ChatHeader'; // Chat Header Component
import ChatList from '../ChatList'; // Chat List Component
import ChatForm from '../ChatForm'; // Chat Form Component

export default function Chat() {
  const stateOnURL = Object(useLocation().state); // Data on URL
  const { messageList, setMessageList }: any = useMessage(); // Message Custom Context

  /* Chat Mount Handler */
  useEffect(() => {
    init(); // Socket Client API Inıtialize

    addMessage((msg: any) => { // Add new message to message list
      setMessageList((prevState: any) => [...prevState, msg])
    });
  }, []);

  return (
    /* Chat Card Division */
    <div className="card bg-light position-absolute top-50 start-50 translate-middle" style={{
      "width": "110rem",
      "height": "55rem",
      "borderRadius": "15px"
    }}>

      {/* Chat Header */}
      <div className="card-header">
        <ChatHeader />
      </div>

      {/* Chat Message List */}
      <div className="card-body bg-dark text-success overflow-auto">
        <ChatList username={stateOnURL.username} messageList={messageList} />
      </div>

      {/* Chat Message Input Form */}
      <div className="card-footer px-4 py-3 bg-transparent">
        <ChatForm username={stateOnURL.username} />
      </div>
    </div >
  )
}