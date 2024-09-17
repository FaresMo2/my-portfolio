function Title({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-5xl pb-6 text-gray-100 font-bold">{title}</h1>
      <p className="bg-yellow-400 h-2 w-20"></p>
    </div>
  );
}

export default Title;
