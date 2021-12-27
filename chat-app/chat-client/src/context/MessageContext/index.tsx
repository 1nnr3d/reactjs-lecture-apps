/* Modules */
import { createContext, useState, useContext } from 'react';

const MessageListContext = createContext([]);

export const MessageProvider = ({ children }: any) => {
  const [messageList, setMessageList] = useState([]);

  const values: any = {
    messageList,
    setMessageList
  }

  return <MessageListContext.Provider value={values}>{children}</MessageListContext.Provider> // Returning Provider
}

export const useMessage = () => useContext(MessageListContext); //Custom Context Hook