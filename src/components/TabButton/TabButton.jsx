/*In ReactJS, Component Composition refers to the practice of creating reusable UI components by combining smaller components together. This allows developers to break down complex UIs into smaller, more manageable parts, which can be easily reused across different parts of the application.*/

//We can use destructuring to extract the children prop from the props object in the function signature. This way, we can use the children prop directly in the function body without having to reference props.children.
export default function TabButton({ children, isSelected, ...props}) {
  

  return (
    <li>
      {/*       
        We can use the children prop directly in the function body.
        We use the function name as a value, it is important not to add parentheses to the function name, as this would call the function immediately.
      */}
      <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
    </li>
  );
}

//Below is an example of using props instead of destructuring:
/*
export default function TabButton(props) {
  return (
    <li><button>{props.children}</button></li>
  );
}
*/
