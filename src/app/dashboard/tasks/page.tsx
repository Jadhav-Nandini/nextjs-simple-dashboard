

"use client";

import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

type Task = {
  id: number;
  title: string;
  description: string;
};

const TasksPage = () => {
  const [Tasks, setTasks] = useState<Task[]>([]);
  const [showForm, setshowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (!title.trim() || !description.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
    };

    setTasks([newTask, ...Tasks]);
    setTitle("");
    setDescription("");
    setshowForm(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-10 font-heading">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Tasks</h1>
          <p className="text-gray-600 font-light ">
            Track, manage, and complete your tasks with ease
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => setshowForm((prev) => !prev)}
            className="flex items-center gap-2 bg-[#f0f4f8] text-blue-700 px-5 py-3 rounded-2xl
      hover:scale-105 transition-transform duration-200 "
          >
            <FaPlusCircle /> Add Task
          </button>
        </div>

        {/* form (conditional) */}

        {showForm && (
          <div
            className="bg-white rounded-2xl space-y-4 
    p-6 "
          >
            <input
              type="text"
              placeholder="Task Title"
              className="w-full border p-3 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea value={description} 
            onChange={(e)=> setDescription(e.target.value)}
              placeholder="Task Description"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            ></textarea>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setshowForm(false)}
                className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={handleAddTask}
                className="px-4 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition-all"
              >
                Save Task
              </button>
            </div>
          </div>
        )}

        {/* Task List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg-cols-3 gap-6">
          {Tasks.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center">
              No tasks yet. Add your first one!{" "}
            </p>
          ) : (
            Tasks.map((task) => (
              <div key={task.id} className="bg-[#f0f4f8]rounded-2xl p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 ">
                  {" "}
                  {task.title}{" "}
                </h2>

                <p className="text-sm text-gray-600">{task.description} </p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default TasksPage;
