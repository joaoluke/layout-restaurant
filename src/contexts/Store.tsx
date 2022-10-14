import axios from "axios";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  ChangeEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { OptionsMenuProps } from "../types";

interface StoreContextData {
  optionsMenu: OptionsMenuProps;
  getPlates(): void;
  notify(message: string): void;
}

type PropsStoreProviders = {
  children: ReactNode;
};

const StoreContext = createContext({} as StoreContextData);

const StoreContextProvider = ({ children }: PropsStoreProviders) => {
  const [optionsMenu, setOptionsMenu] = useState([]);

  const getPlates = async () => {
    try {
      const response = await axios.get(
        "https://retaurant-api.herokuapp.com/api/plates/"
      );
      setOptionsMenu(response.data);
    } catch (err) {
      notify("Server error");
      setOptionsMenu([]);
    }
  };

  const notify = (message: string) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <StoreContext.Provider
      value={{
        optionsMenu,
        getPlates,
        notify,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};

export default StoreContextProvider;
