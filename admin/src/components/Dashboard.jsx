import React, { useState } from 'react';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    longitude: '',
    latitude: '',
    title: '',
    description: '',
    url: '',
    file: null,
    province: ''  // New field
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mt-4"> {/* Increased max-width */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Submit Location</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4"> {/* Added grid layout */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="longitude">Longitude</label>
              <input
                type="text"
                name="longitude"
                id="longitude"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                value={formData.longitude}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="latitude">Latitude</label>
              <input
                type="text"
                name="latitude"
                id="latitude"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                value={formData.latitude}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="option">Select Province</label>
              <select
                name="option"
                id="option"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                value={formData.option}
                onChange={handleChange}
                required
              >
                <option value="">Select Province</option>
                <option value="Koshi">Koshi</option>
                <option value="Madhesh">Madhesh</option>
                <option value="Bagmati">Bagmati</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Karnali">Karnali</option>
                <option value="Sudurpashchim">Sudurpashchim</option>
                
              </select>
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">URL</label>
              <input
                type="url"
                name="url"
                id="url"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                value={formData.url}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">File</label>
              <input
                type="file"
                name="file"
                id="file"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-end"> {/* Adjusted button alignment to justify-end */}
            <button
              type="submit"
              className="bg-[#833738] hover:bg-[#9A1D20] text-white font-bold py-2 px-4 rounded transform hover:scale-110 transition-transform duration-300 focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
