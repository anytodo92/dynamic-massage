import {
  Icons,
} from "../../../utils/assets";
import {
  PriceWrapper
} from "./styled";

const Price = (): JSX.Element => {
  

  const priceList: Array<any> = [
    {
      id: 1,
      title: "45 Minuten",
      content: "CHF 50.-",
    },
    {
      id: 2,
      title: "60 Minuten",
      content: "CHF 70.-",
    },
    {
      id: 3,
      title: "90 Minuten",
      content: "CHF 90.-",
    }
  ]
  return (
    <PriceWrapper>
      <div className="content">
        <div className="prices">
          <div className="wrapper">
          {priceList.map((data, index) => 
            <div key={index} className="one">
              <h1>{data.title}</h1>
              <p>{data.content}</p>
            </div>
          )}
          </div>
        </div>
      </div>
    </PriceWrapper>
  );
}

export default Price;