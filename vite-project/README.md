RBAC Dashboard
This project implements a Role-Based Access Control (RBAC) dashboard for managing users and roles with different access permissions. The dashboard provides features for managing users, assigning roles, and controlling access to different parts of the application based on the assigned roles.

Features
Role Management: Manage roles with specific permissions.

User Management: Add, edit, delete users, and assign them roles.

RBAC Implementation: Define permissions and restrict access based on roles.

Responsive Design: The dashboard is responsive, adapting to mobile, tablet, and desktop screen sizes.

Smooth Animations: Animations for fading elements and hover effects.

Tech Stack:
Frontend: HTML, CSS, JavaScript (React.js)

Getting Started:
Follow these steps to set up and run the project:

1.Clone the repository:
https://github.com/nagasai1155/VrV_frontend_assignment

2.Navigate into the project directory:
"cd vite-project"

3.Install dependencies:
"npm install"

4.Start the development server:
"npm start"

5.Open http://localhost:3000 in your web browser to view the dashboard.

Project Structure:

public/index.html: The main HTML file where the dashboard structure is defined.
src/: Contains React components and logic for user management, role management, and access control.
src/components/: Reusable UI components like the navbar, sidebar, and tables.
src/pages/: Pages for the dashboard, user management, and role management.
src/styles/: CSS files for styling the dashboard.
src/utils/: Utility functions for managing roles and permissions.
package.json: Contains project dependencies and scripts.
server/ (Optional): If the backend is implemented, this directory contains the server-side logic.

Key Components
1. Navbar
Provides links to navigate to different parts of the dashboard (e.g., User Management, Role Management).
The navbar is responsive and adapts to various screen sizes.

2. User Management
A section where admins can manage users, including adding, editing, and deleting users.
Each user can be assigned a specific role that defines their permissions.

3. Role Management
Allows the creation, editing, and deletion of roles.
Each role is associated with specific permissions that determine what the user can access.

4. Access Control
Users can only access areas of the dashboard based on their assigned roles.
Role-based permissions ensure that users can only view or edit the content they are authorized to access.

Responsive Design:
The dashboard is fully responsive and includes the following:

Mobile View: The sidebar and navbar collapse to a mobile-friendly version for smaller screens.
Tablet View: The layout adjusts for medium-sized screens.
Desktop View: The dashboard is optimized for larger screens, with more space for managing roles and users.

Animations:
Fade In: UI elements like the navbar, headers, and buttons fade in as the page loads.
Hover Effects: Buttons and table rows have hover effects that include color changes and slight movements.

Button Animations: Buttons are animated to scale on hover.

