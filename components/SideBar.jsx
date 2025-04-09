const SideBar = () => {
    return (
      <div className="w-64 bg-violet-200 p-4 ml-4 flex flex-col lg:flex-row rounded-md">
                <nav className="p-4 space-y-5">
          <a href="/" className="block font-semibold">Home</a>
          <a href="/courses" className="block font-semibold">Courses</a>
        </nav>
      </div>
    );
  };
  
  export default SideBar ;
  
