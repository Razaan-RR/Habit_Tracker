import { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

function UpdateHabit() {
  const { user } = useContext(AuthContext);
  const habitData = useLoaderData(); // existing habit data

  const [habit, setHabit] = useState({
    title: habitData.title || "",
    description: habitData.description || "",
    category: habitData.category || "Morning",
    reminderTime: habitData.reminderTime || "",
    imageUrl: habitData.imageUrl || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabit({ ...habit, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedHabit = {
      ...habit,
      updatedAt: new Date(),
    };

    fetch(`http://localhost:3000/habits/${habitData._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedHabit),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success("Habit updated successfully!");
        } else {
          toast.error("Update failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong.");
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-indigo-25 py-12">
      <section className="w-11/12 max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-700 tracking-wide">
          Update Habit
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Habit Title
            </label>
            <input
              type="text"
              name="title"
              value={habit.title}
              onChange={handleChange}
              placeholder="Enter habit title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={habit.description}
              onChange={handleChange}
              placeholder="Describe your habit..."
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Category
            </label>
            <select
              name="category"
              value={habit.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option>Morning</option>
              <option>Work</option>
              <option>Fitness</option>
              <option>Evening</option>
              <option>Study</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Reminder Time
            </label>
            <input
              type="time"
              name="reminderTime"
              value={habit.reminderTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Image URL (optional)
            </label>
            <input
              type="url"
              name="imageUrl"
              value={habit.imageUrl}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              User Name
            </label>
            <input
              type="text"
              value={user?.displayName || habitData.ownerName || ""}
              readOnly
              className="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              User Email
            </label>
            <input
              type="email"
              value={user?.email || habitData.ownerEmail || ""}
              readOnly
              className="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Update Habit
          </button>
        </form>
      </section>
    </div>
  );
}

export default UpdateHabit;
