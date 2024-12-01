// RoleSection.jsx
import React, { useState } from 'react';
import './RoleSection.css';

function RoleSection({ title, permissions, className, description }) {
  const [selectedPermissions, setSelectedPermissions] = useState(
    Array(permissions.length).fill(false)
  );

  // Toggle selection of all permissions
  const handleSelectAll = () => {
    const allSelected = selectedPermissions.every((selected) => selected);
    setSelectedPermissions(Array(permissions.length).fill(!allSelected));
  };

  const handlePermissionChange = (index) => {
    setSelectedPermissions((prev) =>
      prev.map((isSelected, i) => (i === index ? !isSelected : isSelected))
    );
  };

  return (
    <div className={`role-section-container ${className}`}>
      <h3>{title}</h3>

      
      <p className="role-description">{description}</p>
      <div className="divider"></div>
      {/* Existing Select All button triggers handleSelectAll */}
      <button onClick={handleSelectAll}>
        {selectedPermissions.every(Boolean) ? "Deselect All" : "Select All"}
      </button>

      <ul>
        {permissions.map((permission, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={selectedPermissions[index]}
                onChange={() => handlePermissionChange(index)}
              />
              {permission}
            </label>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default RoleSection;
