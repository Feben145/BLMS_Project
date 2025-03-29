const SideBar = () => {
    return (
      <div className="w-1/4 bg-purple-200 p-6">
        <h1 className="text-2xl font-bold">BLM</h1>
        <nav className="mt-10 space-y-4">
          <a href="/" className="block font-semibold underline">Home</a>
          <a href="/dashboard" className="block">Dashboard</a>
          <a href="/courses" className="block">Courses</a>
        </nav>
      </div>
    );
  };
  
  export default SideBar ;
  