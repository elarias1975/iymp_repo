// src/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="p-24">      
      <h1 className="bg-[#3b82f6] text-[#09090b] rounded-lg hover:bg-[#dc2626] text-center">Inscripciones</h1>
      <p class="text-decoration-color: #64748b py-6" >Y más inscripciones</p>

      <div className="inline-block relative w-64">
        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>Really long option that will likely overlap the chevron</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded p-12">
      Button
    </button>
      
    </div>
  );
};

export default Home;
