function Category({ name, Icon }) {
  return (
    <div className="min-w-20 flex flex-col items-center cursor-pointer group">
      <div className="h-12 w-12 rounded-full bg-violet-100 flex justify-center items-center group-hover:bg-violet-600 transition-all duration-300 shadow-md">
        <Icon className="text-3xl text-violet-600 group-hover:text-white" />
      </div>

      <p className="mt-2 text-sm font-medium group-hover:text-violet-600">
        {name}
      </p>
    </div>
  );
}

export default Category;