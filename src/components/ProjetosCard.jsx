import React from 'react';

const ProjetoCard = ({ image, title, paragraph1, paragraph2, button1Text, button1Link, button2Text, button2Link }) => {
  return (
    <div className="bg-green-400 border-black border-2 rounded-3xl p-6 w-96  shadow-lg flex flex-col items-center">
      
      <div className="ml-3 w-full h-36 flex items-center mb-1 border-black border-1 rounded-xl">
        <img src={image} alt="projeto imagem" className="h-full rounded-xl" />
      </div>
      <div>
        <h2 className='text-xl font-semibold text-orange-600 mb-2'>{title}</h2>
      </div>
      <div className="bg-green-300 w-full flex flex-col items-center rounded-lg px-3">
        <p className="text-black text-justify text-sm my-2 px-2">{paragraph1}</p>
        <p className="text-black text-justify text-sm mx-2 mb-3">{paragraph2}</p>
      </div>
      <div className="flex justify-center  w-full mt-7 space-x-20">
        <a href={button1Link} target='_blank' className="bg-green-600 text-white py-2 px-4 rounded-3xl shadow-md hover:bg-green-500 text-center">
          {button1Text}
        </a>
        <a href={button2Link} target='_blank' className="bg-orange-600 text-white py-2 px-4 rounded-3xl shadow-md hover:bg-orange-500 text-center">
          {button2Text}
        </a>
      </div>
      
    </div>
  );
};

export default ProjetoCard;
