import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserBarChart = ({ data }) => {
  return (
    <div className="flex items-center justify-center p-8 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">User Visit Data</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="visits" fill="#9A1D20" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserBarChart;
