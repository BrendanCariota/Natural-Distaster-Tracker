import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'

function App() {
  // State to hold our eventData(API Information)
  const [eventData, setEventData] = useState([]);
  // State to set loading if we are waiting to fetch data
  const [loading, setLoading] = useState(false);

  // We use this use effect and a fetch to retrieve our data on page load
  useEffect(() => {
    // We need to create a seperate function for our fetch api
    const fetchEvents = async () => {
      // We first setLoading to true because we are loading to set the data
      setLoading(true);
      // RESPONSE - wait for a fetch request from the json file on NASAs API site
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      // This will give us our data. We need to await because it will return a promise
      // We will use destructuring to pull just the events array our of the data because thats all we want
      const { events } = await res.json();
      // We then set our eventData to the events object we pulled from the site
      setEventData(events);
      // Set loading to false because we have gotten the required data
      setLoading(false);
    }
    
    // Call our fetch function in the useEffect so it will run on start and fetch our data
    fetchEvents();
  }, [])
  
  return (
    <div>
      { !loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
