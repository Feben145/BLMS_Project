const SideBar = () => {
    return (
      <div className="w-64 bg-purple-200 py-4 mr-4">
                <nav className="mt-10 space-y-4">
          <a href="/" className="block font-semibold underline">Home</a>
          <a href="/dashboard" className="block">Dashboard</a>
          <a href="/courses" className="block">Courses</a>
        </nav>
      </div>
    );
  };
  
  export default SideBar ;
  