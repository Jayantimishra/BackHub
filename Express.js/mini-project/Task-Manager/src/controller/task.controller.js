import { readTask, writeTask } from "../utils/file.utils.js";

export const getAllTask = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  const tasks = await readTask();
  res.json(tasks.filter((task) => task.username === req.session.user.username));
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const tasks = await readTask();

  const newTask = {
    id: Date.now(),
    username: req.session.user.username,
    title,
    description,
    completed: false,
  };

  tasks.push(newTask);
  await writeTask(tasks);

  res.status(201).json(newTask);
};

export const updateTask = () => {};
export const getTaskById = () => {};

export const deleteTask = () => {};
