import { useContext } from 'react';
import { AuthContext } from './security/AuthContext';

function FooterComponent() {
  const authContext = useContext(AuthContext);

  console.log(`Footer component - ${authContext.number}`);

  return (
    <footer className="footer border-top border-light border-5 mb-2 p-2">
      <div className="container">Footer</div>
    </footer>
  );
}

export default FooterComponent;
