import React, { useState } from 'react';
import styles from './UserManagement.module.scss';

const UserManagement = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Jane Smith', role: 'Editor', status: 'Inactive' },
        { id: 3, name: 'Michael Johnson', role: 'Viewer', status: 'Active' },
        { id: 4, name: 'Sarah Williams', role: 'Admin', status: 'Inactive' },
        { id: 5, name: 'David Brown', role: 'Editor', status: 'Active' },
        { id: 6, name: 'Emily Davis', role: 'Viewer', status: 'Active' },
        { id: 7, name: 'James Wilson', role: 'Editor', status: 'Inactive' },
        { id: 8, name: 'Linda Taylor', role: 'Admin', status: 'Active' },
        { id: 9, name: 'Robert Anderson', role: 'Viewer', status: 'Inactive' },
        { id: 10, name: 'Patricia Thomas', role: 'Editor', status: 'Active' },
    ]);

    const [newUser, setNewUser] = useState({
        name: '',
        role: '',
        status: 'Active',
    });

    const handleAddUser = () => {
        const newUserObj = { ...newUser, id: users.length + 1 };
        setUsers([...users, newUserObj]);
        setNewUser({ name: '', role: '', status: 'Active' }); // Reset the form
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    return (
        <div className={styles.userManagement}>
            <h1 className={styles.header}>User Management</h1>

            {/* Add User Form */}
            <div className={styles.addUserForm}>
                <h2 className={styles.formTitle}>Add New User</h2>
                <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    placeholder="Enter user name"
                    className={styles.inputField}
                />
                <input
                    type="text"
                    name="role"
                    value={newUser.role}
                    onChange={handleInputChange}
                    placeholder="Enter role"
                    className={styles.inputField}
                />
                <select
                    name="status"
                    value={newUser.status}
                    onChange={handleInputChange}
                    className={styles.inputField}
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                <button onClick={handleAddUser} className={styles.addButton}>
                    Add User
                </button>
            </div>

            {/* Users Table */}
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>S. No</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>
                                <span
                                    className={
                                        user.status === 'Active' ? styles.active : styles.inactive
                                    }
                                >
                                    {user.status}
                                </span>
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeleteUser(user.id)}
                                    className={styles.deleteButton}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
