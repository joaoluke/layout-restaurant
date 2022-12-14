import { CardProps } from "../../types";

import * as Style from "./style";

export function Card({ name, description, image, price }: CardProps) {
  return (
    <Style.Container>
      <div className="card">
        <div className="card-header">
          <img
            src={image}
            alt="card-image"
            className="card-image"
            width="600"
          />
        </div>
        <div className="card-body">
          <h4>{name}</h4>
          <p>{description}</p>
          <Style.PriceTag className="card-price">{price}</Style.PriceTag>
        </div>
      </div>
    </Style.Container>
  );
}
