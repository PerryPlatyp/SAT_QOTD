export default async function Fetcher(test, domain){
     // Fetch data
  const response = await fetch("https://qbank-api.collegeboard.org/msreportingquestionbank-prod/questionbank/digital/get-questions", {
    method: "POST",
    body: JSON.stringify({"asmtEventId": 99, "test": test, "domain": domain}),
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  // Await the JSON conversion and return the data
  const data = await response.json();
  return data;
}