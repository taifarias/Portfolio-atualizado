import React from 'react';

const ProjetoCard = ({ image, paragraph1, paragraph2, button1Text, button1Link, button2Text, button2Link }) => {
  return (
    <div className="bg-green-400 border-black border-2 rounded-lg p-6 w-80 h-96 shadow-lg flex flex-col items-center">
      
      <div className="bg-black w-full h-36 flex justify-center items-center mb-4 border-gray-500 border-4">
        <img src={image} alt="projeto imagem" className="h-full" />
      </div>
      <div className="bg-gray-300 p-4 w-full flex flex-col items-center rounded-lg mb-4">
        <p className="text-black text-center text-sm mb-2">{paragraph1}</p>
        <p className="text-black text-center text-sm">{paragraph2}</p>
      </div>
      <div className="flex justify-between w-full mt-4">
        <a href={button1Link} className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 text-center">
          {button1Text}
        </a>
        <a href={button2Link} className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 text-center">
          {button2Text}
        </a>
      </div>
      
    </div>
  );
};

export default ProjetoCard;
