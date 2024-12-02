import React, { useState } from 'react';
import styles from './RoleManagement.module.scss';

const RoleManagement = () => {
    const [roles, setRoles] = useState([
        { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
        { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
        { id: 3, name: 'Viewer', permissions: ['Read'] },
    ]);
    const [newRole, setNewRole] = useState({ name: '', permissions: [] });
    const [editRole, setEditRole] = useState(null);

    const handleAddRole = (e) => {
        e.preventDefault();
        if (newRole.name && newRole.permissions.length > 0) {
            setRoles([...roles, { id: roles.length + 1, ...newRole }]);
            setNewRole({ name: '', permissions: [] });
        } else {
            alert('Please provide valid role details.');
        }
    };

    const handlePermissionChange = (permission) => {
        setNewRole((prev) => {
            const permissions = prev.permissions.includes(permission)
                ? prev.permissions.filter((perm) => perm !== permission)
                : [...prev.permissions, permission];
            return { ...prev, permissions };
        });
    };

    const handleEditPermissions = (role) => {
        setEditRole(role);
    };

    const handleUpdatePermissions = () => {
        setRoles(roles.map((role) =>
            role.id === editRole.id ? { ...role, permissions: editRole.permissions } : role
        ));
        setEditRole(null); // Close the edit modal
    };

    const handlePermissionEditChange = (permission) => {
        const permissions = editRole.permissions.includes(permission)
            ? editRole.permissions.filter((perm) => perm !== permission)
            : [...editRole.permissions, permission];
        setEditRole({ ...editRole, permissions });
    };

    return (
        <div className={styles.roleManagement}>
            <h1 className={styles.header}>Role Management</h1>

            {/* Add Role Form */}
            <form onSubmit={handleAddRole} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="roleName">Role Name</label>
                    <input
                        type="text"
                        id="roleName"
                        value={newRole.name}
                        onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                        placeholder="Enter role name"
                        className={styles.inputField}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Permissions</label>
                    <div className={styles.permissions}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={newRole.permissions.includes('Read')}
                                onChange={() => handlePermissionChange('Read')}
                            />
                            Read
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={newRole.permissions.includes('Write')}
                                onChange={() => handlePermissionChange('Write')}
                            />
                            Write
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={newRole.permissions.includes('Delete')}
                                onChange={() => handlePermissionChange('Delete')}
                            />
                            Delete
                        </label>
                    </div>
                </div>
                <button type="submit" className={styles.addRoleButton}>
                    Add Role
                </button>
            </form>

            {/* Role List Table */}
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Role Name</th>
                        <th>Permissions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role) => (
                        <tr key={role.id}>
                            <td>{role.id}</td>
                            <td>{role.name}</td>
                            <td>{role.permissions.join(', ')}</td>
                            <td>
                                <button
                                    onClick={() => handleEditPermissions(role)}
                                    className={styles.editButton}
                                >
                                    Edit Permissions
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Permissions Modal */}
            {editRole && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>Edit Permissions for {editRole.name}</h2>
                        <div className={styles.permissions}>
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    checked={editRole.permissions.includes('Read')}
                                    onChange={() => handlePermissionEditChange('Read')}
                                />
                                Read
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    checked={editRole.permissions.includes('Write')}
                                    onChange={() => handlePermissionEditChange('Write')}
                                />
                                Write
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    checked={editRole.permissions.includes('Delete')}
                                    onChange={() => handlePermissionEditChange('Delete')}
                                />
                                Delete
                            </label>
                        </div>
                        <div className={styles.modalActions}>
                            <button onClick={handleUpdatePermissions} className={styles.updateButton}>
                                Update Permissions
                            </button>
                            <button onClick={() => setEditRole(null)} className={styles.cancelButton}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoleManagement;
