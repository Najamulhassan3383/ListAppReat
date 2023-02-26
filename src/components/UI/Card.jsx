import "./Card.css";

export default function Card(prop) {
  let classes = "card " + prop.className;
  return <div className={classes}>{prop.children}</div>;
}
