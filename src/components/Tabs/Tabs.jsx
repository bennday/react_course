export default function Tabs({ children, buttons, ButtonsContainer = 'menu' /* this sets the default value to 'menu' if no value is passed in */ }) {
    
  //must be remapped if not starting with uppercase letter i.e. a component
  // const ButtonsContainer = buttonsContainer || 'ul';
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
