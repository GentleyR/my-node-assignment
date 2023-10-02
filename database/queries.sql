-- Query 1: Select all users and their email addresses
SELECT username, email FROM users;

-- Query 2: Select all projects, associated with their creator's username
SELECT DISTINCT projects.project_name, users.username 
FROM projects 
JOIN users ON projects.user_id = users.id;

-- Query 3: Select all tasks for the 'Website Redesign' project, along with their status and due dates
SELECT DISTINCT tasks.task_name, tasks.status, tasks.due_date 
FROM tasks 
JOIN projects ON tasks.project_id = projects.id 
WHERE projects.project_name = 'Website Redesign';

-- Query 4: Select all comments from JohnDoe
SELECT tasks.task_name, comments.comment_text 
FROM comments 
JOIN users ON comments.user_id = users.id 
JOIN tasks ON comments.task_id = tasks.id 
WHERE users.username = 'JohnDoe';
