import {
  Icons,
} from "../../../utils/assets";

import {
  CardWrapper
} from "./styled";

const Card = (): JSX.Element => {
  const cardList: Array<any> = [
    {
      id: 1,
      icon: Icons.SportMassageIconUrl,
      title: "Sport Massage",
      description: `
      Ein zwei Sätze zu Sport  Massage. Lorem ipsum dolor sit amet, consetetur 
      sadipscing elitr, sed diam nonumy 
      eirmod tempor invidunt ut labore et 
      dolore magna aliquyam erat.
      `
    },
    {
      id: 2,
      icon: Icons.EntsMassageIconUrl,
      title: "Entspannungs Massage",
      description: `
      Ein zwei Sätze zu Sport  Massage. Lorem ipsum dolor sit amet, consetetur 
      sadipscing elitr, sed diam nonumy 
      eirmod tempor invidunt ut labore et 
      dolore magna aliquyam erat.
      `
    },
    {
      id: 3,
      icon: Icons.HotMassageIconUrl,
      title: "Hot Stone Massage",
      description: `
      Ein zwei Sätze zu Sport  Massage. Lorem ipsum dolor sit amet, consetetur 
      sadipscing elitr, sed diam nonumy 
      eirmod tempor invidunt ut labore et 
      dolore magna aliquyam erat.
      `
    }
  ]

  return (
    <CardWrapper>
      <div className="content">
        <div className="cards">
        {cardList.map((data, index) => 
          <div key={index} className="one">
            <div className="icon">
              <img src={data.icon} />
            </div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        )}
        </div>
      </div>
    </CardWrapper>
  );
}

export default Card;