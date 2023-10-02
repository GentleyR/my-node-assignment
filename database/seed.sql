-- Inserting sample users
INSERT INTO users (username, email) VALUES
('JohnDoe', 'johndoe@example.com'),
('JaneSmith', 'janesmith@example.com');

-- Inserting sample projects
INSERT INTO projects (user_id, project_name, description) VALUES
(1, 'Website Redesign', 'Redesigning the company website'),
(2, 'App Development', 'Developing a new mobile app');

-- Inserting sample tasks for projects
INSERT INTO tasks (project_id, task_name, due_date, status) VALUES
(1, 'Design Homepage', '2023-10-10', 'in progress'),
(1, 'Develop Backend', '2023-10-20', 'pending'),
(2, 'Design App UI', '2023-11-01', 'in progress'),
(2, 'Test App', '2023-11-15', 'pending');

-- Inserting sample comments for tasks
INSERT INTO comments (task_id, user_id, comment_text) VALUES
(1, 1, 'The design is almost done. Just need to finalize colors.'),
(2, 2, 'Backend development will start next week.'),
(3, 2, 'UI design is looking good. Need feedback.'),
(4, 1, 'Testing phase should include both alpha and beta releases.');
