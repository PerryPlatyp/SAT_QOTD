"use client"
import { useEffect, useState } from "react";
import Question from "./question";
export default function Home() {
  // Data for the questions that get fetched from the College Board servers
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  // useEffect to get the data
  useEffect(() => {
    // Fetch data
    fetch("https://qbank-api.collegeboard.org/msreportingquestionbank-prod/questionbank/digital/get-questions", {
      method: "POST",
      body: JSON.stringify({"asmtEventId":99,"test":2,"domain":"H,P,Q,S"})
    })
    .then((res) => res.json())
    .then((data) => {
      // Set data to the fetched data and stop loading
      setData(data)
      setLoading(false)
    })
  }, [])

  if (!data) return(<p>No data</p>)
  if (isLoading) return <p>Loading...</p>
  
  console.log(Question(data, "3f5a3602"));
  
  return (
    <div className="">
      
    </div>
  );
}
