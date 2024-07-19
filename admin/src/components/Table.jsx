import React from 'react';

const Table= () => {
  const data = [
    {
      id: 1,
      provinces: 'Province 1',
      title: 'Title 1',
      image: 'http://example.com/image1.jpg'
    },
    {
      id: 2,
      provinces: 'Province 2',
      title: 'Title 2',
      image: 'http://example.com/image2.jpg'
    },
    // Add more data as needed
  ];

  const handleEdit = (id) => {
    // Handle edit action
    console.log(`Edit item with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete action
    console.log(`Delete item with id: ${id}`);
  };

  return (
    <>
    <div className="container min-h-screen bg-gray-100 p-4">
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <h1 className='max-w-full bg-white text-2xl font-sans font-bold py-2 px-3 text-red-700'> Data Table</h1>
          <tr className="bg-gray-200 text-black">
            <th className="py-2 px-2 text-left text-red-700">Provinces</th>
            <th className="py-2 px-2 text-left text-red-700">Title</th>
            <th className="py-2 px-2 text-left text-red-700">Image</th>
            <th className="py-2 px-3 text-left text-red-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t bg-white hover:bg-gray-100 transition duration-150 ease-in-out">
              <td className="py-1 px-2">{item.provinces}</td>
              <td className="py-1 px-2">{item.title}</td>
              <td className="py-1 px-2">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg " />
              </td>
              <td className="py-3 px-3 flex space-x-2">
                <button onClick={() => handleEdit(item.id)} className="text-blue-500 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-4.036a2.5 2.5 0 113.536 3.536L7 21H3v-4L16.732 3.232z" />
                  </svg>
                </button>
                <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Table;

