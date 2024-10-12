function Title({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h1 className="text-xl font-bold text-gray-100 pb:2 lg:pb-6 lg:text-5xl">
        {title}
      </h1>
      <p className="w-20 h-1 bg-yellow-400 lg:h-2"></p>
    </div>
  );
}

export default Title;
