const SideBar = () => {
    return (
      <div className="w-64 bg-purple-200 p-4 ml-4">
                <nav className="p-4 space-y-5">
          <a href="/" className="block font-semibold underline">Home</a>
          <a href="/dashboard" className="block">Dashboard</a>
          <a href="/courses" className="block">Courses</a>
        </nav>
      </div>
    );
  };
  
  export default SideBar ;
  