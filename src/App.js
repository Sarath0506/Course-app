import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

function App () {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json(); 
      setCourses(output.data); 
    } catch(e) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-gray-900">
      <Navbar />
      {/* <h1>hi</h1> */}
      <div>
        <Filter 
          filterData={filterData}
          category={category}
          setCategory={setCategory} 
        />
      </div>
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
      </div>
    </div>
  );
}

export default App;
