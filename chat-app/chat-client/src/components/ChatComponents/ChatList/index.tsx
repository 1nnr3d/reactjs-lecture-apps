/* Modules */
import ScrollableFeed from 'react-scrollable-feed'; // Auto Scroll Library

/* Components */
import Message from "../Message"; // Message Card

function MessageBox({ username, messageList }: any) {
  return (
    <>
      <ul className="list-group">
        <ScrollableFeed forceScroll={true}>
          {
            // Listing of messages
            messageList.map((msg: any, index: number) => {
              return <li
                key={index}
                className="list-group-item mb-5 bg-transparent"
                style={{ "height": "4rem" }}>
                <Message msg={msg} username={username} />
              </li>
            })
          }
        </ScrollableFeed>
      </ul>
    </>
  )
}

export default MessageBox
