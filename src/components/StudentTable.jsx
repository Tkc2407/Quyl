import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents, addStudent } from "../store/studentsSlice";

const StudentTable = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [isAddingStudent, setIsAddingStudent] = useState(false);

  // Get students and loading state from Redux store
  const { students } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  // Fetch students on mount and whenever filters change
  useEffect(() => {
    dispatch(fetchStudents({ selectedYear, selectedClass }));
  }, [dispatch, selectedYear, selectedClass]);

  // Add a new student and refresh the data
  const handleAddStudent = async (studentData) => {
    try {
      await dispatch(addStudent(studentData));
      alert("Student data successfully added");
      setIsAddingStudent(false); // Close the modal after adding
    } catch (err) {
      console.error("Error adding student:", err);
    }
  };

  return (
    <div className="flex-1 border-spacing-4">
      <div className="flex justify-between items-center mb-4">
        {/* Academic Year and Class Filters */}
        <div className="flex gap-4">
          <select
            className="border p-2 rounded-lg bg-gray-300 text-gray-700 font-bold"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select Academic Year</option>
            <option value="AY 2023-24">AY 2023-24</option>
            <option value="AY 2024-25">AY 2024-25</option>
          </select>

          <select
            className="border p-2 bg-gray-300 text-gray-700 font-bold rounded-lg"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select Class</option>
            <option value="CBSE 9">CBSE 9</option>
            <option value="CBSE 10">CBSE 10</option>
          </select>
        </div>

        {/* Add Student Button */}
        <button
          className="bg-gray-300 text-gray-700 font-bold px-4 py-2 rounded-lg"
          onClick={() => setIsAddingStudent(true)}
        >
          + Add Student
        </button>
      </div>
      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left">Student Name</th>
            <th className="p-4 text-left">Cohort</th>
            <th className="p-4 text-left">Courses</th>
            <th className="p-4 text-left">Date Joined</th>
            <th className="p-4 text-left">Last Login</th>
            <th className="p-4 text-left">Status</th>
          </tr>
          <tr>
            <td colSpan="6">
              <hr className="border-gray-900" />
            </td>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <React.Fragment key={student.id}>
              <tr>
                <td className="p-4">{student.name}</td>
                <td className="p-4">{student.cohort}</td>
                <td className="p-4 font-normal">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    {student.courses}
                  </span>
                </td>
                <td className="p-4">{student.date_joined}</td>
                <td className="p-4">{student.last_login}</td>
                <td className="p-4">
                  {student.status === "active" ? (
                    <span className="text-green-500 font-semibold">Active</span>
                  ) : (
                    <span className="text-red-500 font-semibold">Inactive</span>
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  <hr className="border-gray-200" />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {/* Add Student Modal */}
      {isAddingStudent && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            {/* Modal Header with Close Button */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-center w-full">
                Add New Student
              </h2>
              <button
                className="text-red-500 text-xl font-bold hover:text-red-700"
                onClick={() => setIsAddingStudent(false)}
              >
                &times;
              </button>
            </div>

            {/* Add Student Form */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                await handleAddStudent({
                  name: formData.get("name"),
                  cohort: formData.get("cohort"),
                  courses: formData.get("courses"),
                  date_joined: formData.get("dateJoined"),
                  last_login: formData.get("lastLogin"),
                  status: formData.get("status"),
                });
              }}
            >
              <input
                name="name"
                placeholder="Student Name"
                className="border p-2 w-full mb-2"
                required
              />
              <input
                name="cohort"
                placeholder="Cohort"
                className="border p-2 w-full mb-2"
                required
              />
              <select
                name="courses"
                className="border p-2 w-full mb-2"
                required
              >
                <option value="">Select Courses</option>
                <option value="CBSE 9 Science CBSE 9 Math">
                  CBSE 9 Science CBSE 9 Math
                </option>
                <option value="CBSE 10 Science CBSE 10 Math">
                  CBSE 10 Science CBSE 10 Math
                </option>
              </select>
              <input
                name="dateJoined"
                type="date"
                className="border p-2 w-full mb-2"
                required
              />
              <input
                name="lastLogin"
                type="datetime-local"
                className="border p-2 w-full mb-2"
                required
              />
              <select name="status" className="border p-2 w-full mb-2" required>
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentTable;
