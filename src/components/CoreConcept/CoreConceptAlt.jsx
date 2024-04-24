import "./CoreConcept.css";

//We can also destructure the props object in the function signature
export default function CoreConceptAlt({ title, description, image }) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
  
  