"use client"
import { useEffect, useState } from "react";
import Question from "./question";
import Fetcher from "./fetcher";


export default function Home() {
  // Data for the questions that get fetched from the College Board servers
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    // Fetch data and update state within useEffect
    const fetchData = async () => {
      try {
        const result = await Fetcher(1, "INI");
        // Usage of fetcher
        // Reading: 1, INI: Information and Ideas, CAS: Craft and structure, EOI: Expression of ideas, SEC: Standard english conventions
        // Math: 2, H: Algebra, P: Advanced Math, Q:Problem-Solving and Data Analysis, S: Geometry and Trigonometry
        setData(result); // Store data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading after fetch completes
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array to run only once
  
  console.log(data)
  //if (!data) return(<p>No data</p>)
  //if (isLoading) return <p>Loading...</p>
  
  //console.log(Question(data, "3f5a3602"));
  
  return (
    <div className="">
      
    </div>
  );
}
