import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card } from "../../components";
import { BANNER_IMAGE } from "../../config/images";
import { useStore } from "../../contexts/Store";

import * as Style from "./style";

export function Home() {
  const { getPlates, optionsMenu } = useStore();

  useEffect(() => {
    getPlates();
  }, []);

  console.log(optionsMenu);

  return (
    <Style.Container>
      <ToastContainer />
      <Style.ImageContainer>
        <Style.ImageBanner src={BANNER_IMAGE} />
      </Style.ImageContainer>

      <Style.CardsContainer>
        {optionsMenu.map((itemMenu) => (
          <Card
            key={itemMenu.id}
            name={itemMenu.name}
            description={itemMenu.description}
            image={itemMenu.image}
          />
        ))}
      </Style.CardsContainer>
    </Style.Container>
  );
}
