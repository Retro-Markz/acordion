import AcordionItem from "./AcordionItem";

// eslint-disable-next-line react/prop-types
function Acordion({ data }) {
  return (
    <div>
      {data.map((el, i) => (
        <AcordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

export default Acordion;
