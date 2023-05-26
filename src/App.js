import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Base from './views/Base';
import Local from './views/Local';

function App() {
  return (
    <Router>
      <div>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Key Spouse Organization</h1>
        <div style={{ border: '1px solid black', padding: '10px' }}>
          <p style={{ fontSize: '16px' }}>
            The Key Spouse Organization (KSO) is a valuable support network that serves military spouses and their families. Committed to enhancing the well-being and resilience of military families, the KSO provides vital assistance, guidance, and camaraderie in various ways. First and foremost, the Key Spouse Organization serves as a liaison between military leadership and the families they serve. Key spouses act as a crucial link, relaying information, resources, and support to military families, ensuring they are well-informed about important events, deployments, and changes within the military community. The KSO offers a wide range of services to help military families navigate the challenges they may face. They provide emotional support and a listening ear, offering a sense of community and understanding. Through networking and social events, the organization fosters connections between spouses, encouraging friendships and creating a support system that can be particularly helpful during times of deployment or relocation. Education is another vital aspect of the Key Spouse Organization's mission. They provide valuable information and resources on a variety of topics, such as financial management, healthcare, and child development, helping military families make informed decisions and enhance their overall well-being. Furthermore, the KSO plays a significant role in promoting readiness and resilience within military families. They organize workshops, training sessions, and informational seminars on topics like stress management, communication skills, and conflict resolution. By equipping spouses with these tools, the organization helps strengthen the family unit and supports the overall mission readiness of the military. In summary, the Key Spouse Organization serves as a lifeline for military spouses and their families. Through their dedication, support, and numerous services, they empower military families to thrive in the face of challenges, foster a sense of community, and enhance the overall well-being and readiness of the military community.
          </p>
        </div>
        <h2>Useful Links</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li>
            <a href="https://www.dmfss.com/military-family-readiness-center" target="_blank" rel="noopener noreferrer">Military Family Readiness Center</a>
          </li>
          <li>
            <a href="https://www.dmfss.com/heartlink" target="_blank" rel="noopener noreferrer">Heartlink</a>
          </li>
        </ul>
        <nav>
          <ul>
            <li>
              <Link to="/">Base</Link>
            </li>
            <li>
              <Link to="/local">Local</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/local">
            <Local />
          </Route>
          <Route path="/">
            <Base />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
