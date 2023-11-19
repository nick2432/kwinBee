import React, { useState } from 'react';

function App() {
  const [filters, setFilters] = useState({
    level: '',
    message: '',
    resourceId: '',
    timestamp: '',
    traceId: '',
    spanId: '',
    commit: '',
    parentResourceId: '',
  });

  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleFilterSubmit = async () => {
    try {
      const activeFilter = 'Level'; // Assuming the active filter is 'Level' for error level
      console.log('Active Filter:', activeFilter);
  
      // Construct the route dynamically based on selected filters
      const route = `http://localhost:4011/api/getLogsBy${activeFilter}?level=${filters.level}`;
      const response = await fetch(route, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch logs');
      }
  
      const data = await response.json();
      setLogs(data.data);
      setError(null);
      console.log(data);
    } catch (error) {
      setLogs([]);
      setError('Error fetching logs');
    }
  };

  // Helper function to get the active filter field
  const getActiveFilter = () => {
    const activeFilter = Object.keys(filters).find((key) => filters[key] !== '');
    return activeFilter ? `getLogsBy${capitalizeFirstLetter(activeFilter)}` : '';
  };
  // Helper function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Add input fields for each filter */}
        {Object.keys(filters).map((filter) => (
          <input
            key={filter}
            type="text"
            name={filter}
            placeholder={capitalizeFirstLetter(filter)}
            value={filters[filter]}
            onChange={handleFilterChange}
          />
        ))}

        {/* Button to trigger the filter */}
        <button onClick={handleFilterSubmit}>Filter Logs</button>

        {/* Display selected filters */}
        <p>Active Filters: {getActiveFilter()}</p>

        {/* Display logs */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ul>
          {logs.map((log) => (
            <li key={log._id}>
              {/* Display log properties */}
              <strong>Level:</strong> {log.level}, <strong>Message:</strong> {log.message},{' '}
              <strong>Resource ID:</strong> {log.resourceId}, <strong>Timestamp:</strong> {log.timestamp}
              {/* Add more properties as needed */}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
