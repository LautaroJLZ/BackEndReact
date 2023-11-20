const CardCaracteristicas = ({ titulo, subtitulo, icon }) => {
  return (
    <div className="w-48 h-48 bg-zinc-100 rounded hover:shadow-md duration-500">
      <div className="p-4">
        <div className="w-8 h-8 mb-2 bg-white rounded flex justify-center items-center">
          <i className={icon}></i>
        </div>
        <h5 className="font-bold mb-2">{titulo}</h5>
        <p className="text-gray-400 text-sm mb-2 ">{subtitulo}</p>
      </div>
    </div>
  );
};

export { CardCaracteristicas };
