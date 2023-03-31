import {
  SimpleTextWrapper
} from "./styled";

type SimpleTextPropsType = {
  data: any,
}

const SimpleText = ({ data }: SimpleTextPropsType): JSX.Element => {
  return (
    <SimpleTextWrapper>
      <div className="content">
        <h1>{data.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
      </div>
    </SimpleTextWrapper>
  );
}

export default SimpleText;