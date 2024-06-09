import React from 'react';

function Cards({ item }) {
  const handlePdfClick = () => {
    window.open(item.pdf, '_blank', 'noopener noreferrer');
  };

  return (
    <div className='mt-4 my-3 px-3'>
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="flex justify-center">
          <img src={item.image} alt="Book" className="rounded-t-lg" style={{ width: '200px', height: '300px' }} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary ml-2">{item.category}</div>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{item.title}</p>
          <div className="card-actions mt-4 flex justify-between items-center">
            <div className="badge badge-outline">${item.price}</div>
            {item.pdf && (
              <button
                onClick={handlePdfClick}
                className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-200"
              >
                View PDF
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
