import {useState, createContext } from 'react'; /// no va React desde la versión 17

export const MainContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null); //google user
    const [username, setUsername] = useState(null); //register preference
  
    return (
      <MainContext.Provider value={{ user, setUser, username, setUsername}}>
        {children}
      </MainContext.Provider>
    );
  };


