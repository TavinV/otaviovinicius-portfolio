const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#05041F]">
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-20 h-20 border-8 border-t-transparent border-[#3B5CFF] border-solid rounded-full animate-spin border-t-4"></div>
        <p className="text-white text-lg mt-6 animate-pulse">Carregando sua experiência...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
