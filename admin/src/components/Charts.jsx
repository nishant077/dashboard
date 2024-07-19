import React from 'react';
import UseBarCharts from './UseBarCharts';
import ChartsTwo from './ChartsTwo';

const Charts = () => {
  return (
    <>
       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-5">
       <ChartsTwo/>
       </div>
      

      <div>
        <UseBarCharts />
      </div>
    </>
  );
};

export default Charts;
