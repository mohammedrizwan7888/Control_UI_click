import React from 'react';
import RoleSection from './components/RoleSection/RoleSection';
import './App.css';

const roles = [
  {
    title: "Administrator " ,
    
    
    
    permissions: [
      "Full Access Blood Collection",
      "Create Study",
      "Create Users (Active/Inactive)",
      "Print The Study report (PDF)",
      "Edit Study Data with comments (all activities and Wizard)",
      "Browse Audit logs",
      "Full Access Centrifuge",
      "Delete (Disable) Study",
      "Edit Study No, Title (Edit Study Wizard)",
      "Lock / Unlock Study (hide study from other except administrator)"
    ],
    description: "Permission.",

    className: "administrator"
  },
  {
    title: "Study Personnel",
    permissions: [
      "Data Entry Blood Collection",
      "Data Entry Centrifuge",
      "Data Entry Storage (Comment Entry on all above activities)"
    ],
    description: "only to studies allocated administrator.",
    className: "study-personnel"
  },
  {
    title: "Study Director",
    permissions: [
      "Full Access Blood Collection",
      "Full Access Centrifuge",
      "Edit Study Data with comments (all activities and Wizard)",
      "Browse Audit logs",
      "Print the study report"
    ],
    description: "only to studies allocated administrator.",

    className: "study-director"
  },
  {
    title: "QA Reviewer",
    permissions: [
      "Access all read-only (Comment Entry)"
    ],
    description: " Permission ",

    className: "qa-reviewer"
  },
  {
    title: "Disabled",
    permissions: [
      "Login Disabled"
    ],
    description: " Permission",

    className: "disabled"
  }
];

function App() {
  return (
    <div className="app">
      <div className="header">
        <h2 className="title">Role Name</h2>
        <input type="text" className="role-input" placeholder="Enter role name" />
      </div>
      <hr className="divider" />
      <div className="role-sections">
        {roles.map((role, index) => (
          <RoleSection key={index} title={role.title} permissions={role.permissions} 
          description={role.description}
          className={`role-section-container ${role.className}`} />
        ))}
      </div>
      <button className="update-button">Update Role</button>
    </div>
  );
}

export default App;
