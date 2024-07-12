// import React, { useState } from 'react';
// import Header from './components/Header';
// import SummaryCards from './components/SummaryCards';
// import PatientList from './components/PatientList';
// import SearchFilter from './components/SearchFilter';
// import BulkActions from './components/BulkActions';
// import './App.css';

// const App: React.FC = () => {
//   const [search, setSearch] = useState<string>('');
//   const [filter, setFilter] = useState<string>('all');
//   const [selectedPatients, setSelectedPatients] = useState<number[]>([]);

//   const user = {
//     name: 'Mike Jani',
//     profilePic: 'path/to/profilePic.jpg',
//   };

//   const summaryData = [
//     { title: 'All Patients', value: 400, description: 'Categorized by diseases' },
//     { title: 'Active Patients', value: 170, description: 'With breakdown by disease' },
//     { title: 'New Registrations', value: 62, description: 'Last 7 days' },
//     { title: 'Previous Appointments', value: 13, description: 'Last 7 days' },
//     { title: 'Appointments Today', value: 12, description: 'Categorized by disease' },
//     { title: 'Upcoming Appointments', value: 5, description: 'Categorized by disease' },
//   ];

//   return (
//     <div className="App">
//       <Header user={user} />
//       <div className="dashboard-content">
//         <SummaryCards data={summaryData} />
//         <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
//         <BulkActions selectedPatients={selectedPatients} setSelectedPatients={setSelectedPatients} />
//         <PatientList />
//       </div>
//     </div>
//   );
// };

// export default App;



import React from 'react';
import Dashboard from './pages/dashboard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
};

export default App;
