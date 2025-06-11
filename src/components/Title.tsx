const Title = () => {
  return (
    <h1
      id="title"
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white"
    >
      <span className="construction-item barrier-1">🚧</span>
      <span> {` Under Construction `}</span>
      <span className="construction-item barrier-2">🚧</span>
    </h1>
  );
};

export default Title;
