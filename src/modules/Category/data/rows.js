const rows = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', age: 28, city: 'New York', country: 'USA', company: 'ABC Inc.', phone: '+1 555-123-4567' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', age: 32, city: 'Los Angeles', country: 'USA', company: 'XYZ Corp.', phone: '+1 555-987-6543' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 25, city: 'Chicago', country: 'USA', company: 'ACME Ltd.', phone: '+1 555-789-0123' },
    // ... Add more rows as needed
    // Up to 100 rows
  ];
  
  // Generate additional rows to reach a total of 100
  for (let i = 4; i <= 100; i++) {
    rows.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      age: Math.floor(Math.random() * 80) + 18, // Random age between 18 and 97
      city: `City ${Math.floor(Math.random() * 10) + 1}`,
      country: `Country ${Math.floor(Math.random() * 5) + 1}`,
      company: `Company ${Math.floor(Math.random() * 20) + 1}`,
      phone: `+1 555-555-${(1000 + Math.floor(Math.random() * 9000))}`,
      tone: `+AZE 555-555-${(1000 + Math.floor(Math.random() * 9000))}`,
      home: `+RJK 555-555-${(1000 + Math.floor(Math.random() * 9000))}`,
      rome: `+LMN 555-555-${(1000 + Math.floor(Math.random() * 9000))}`,
    });
  }
  
  export { rows };