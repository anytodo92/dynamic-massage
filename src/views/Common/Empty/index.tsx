type EmptyPropsType = {
  height: number,
}
const Empty = ({ height }: EmptyPropsType): JSX.Element => {
  return (
    <section style={{ height: height }}></section>
  );
}

export default Empty;