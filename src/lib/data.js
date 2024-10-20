const TableData = {
  tableHeader: [
    "Bettor",
    "Email-Mobile",
    "Country",
    "Joined At",
    "Balance",
    "Action",
  ],
  pageNo: 1,
  totalPages: 100,
  tableRows: [],
};

// Helper function to generate random data
function generateRandomData(numEntries) {
  const names = [
    "John Doe", "Sarah Lee", "Ahmed Amin", "Chen Zhang", "Yasmin Cohen", 
    "Liam O'Reilly", "Marta Lopez", "Sergey Ivanov", "Yuki Takahashi", 
    "Rachel Bloom", "Mohammed Al-Farhan", "Anika Mehta", "David King", 
    "Javier Gonzalez", "Sofia Rossi", "Amir Levi", "Emily Stone", 
    "Carlos Hernandez", "Ariella Green", "Jacob Smith", "Maria Ivanova"
  ];

  const emails = [
    "john.doe@example.com", "sarah.lee@example.com", "ahmed.amin@example.com", 
    "chen.zhang@example.com", "yasmin.cohen@example.com", "liam.oreilly@example.com", 
    "marta.lopez@example.com", "sergey.ivanov@example.com", "yuki.takahashi@example.com", 
    "rachel.bloom@example.com", "mohammed.alfarhan@example.com", "anika.mehta@example.com", 
    "david.king@example.com", "javier.gonzalez@example.com", "sofia.rossi@example.com", 
    "amir.levi@example.com", "emily.stone@example.com", "carlos.hernandez@example.com", 
    "ariella.green@example.com", "jacob.smith@example.com", "maria.ivanova@example.com"
  ];

  const countries = [
    "USA", "Canada", "UK", "Spain", "Mexico", "Brazil", "France", "Germany", 
    "China", "India", "Japan", "Russia", "Israel", "Argentina", "Pakistan", 
    "Egypt", "Australia", "Italy", "South Africa", "Saudi Arabia", "Poland"
  ];

  const actions = ["Details"];
  
  function randomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
  }
  
  function randomBalance() {
    return (Math.random() * 5000).toFixed(2);
  }
  
  for (let i = 0; i < numEntries; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomEmail = emails[Math.floor(Math.random() * emails.length)];
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const joinedAt = randomDate(new Date(2017, 0, 1), new Date());
    const balance = randomBalance();
    const action = actions[Math.floor(Math.random() * actions.length)];
    
    TableData.tableRows.push({
      bettor: randomName,
      email: randomEmail,
      country: randomCountry,
      joinedAt,
      balance,
      action
    });
  }
}

generateRandomData(200);



const DummyPersistentData= {
    tableHeader: [
      "Bettor",
      "Email-Mobile",
      "Country",
      "Joined At",
      "Balance",
      "Action",
    ],
    tableRows: [
      { bettor: "John Doe", email: "john.doe@example.com", country: "USA", joinedAt: "2022-01-01", balance: "1000.00", action: "Details" },
      { bettor: "Jane Smith", email: "jane.smith@example.com", country: "Canada", joinedAt: "2021-02-15", balance: "2000.00", action: "Details" },
      { bettor: "Ahmed Amin", email: "ahmed.amin@example.com", country: "UK", joinedAt: "2020-03-20", balance: "1500.50", action: "Details" },
      { bettor: "Chen Zhang", email: "chen.zhang@example.com", country: "China", joinedAt: "2019-04-25", balance: "300.75", action: "Details" },
      { bettor: "Yasmin Cohen", email: "yasmin.cohen@example.com", country: "Israel", joinedAt: "2018-05-30", balance: "750.30", action: "Details" },
      { bettor: "Liam O'Reilly", email: "liam.oreilly@example.com", country: "Ireland", joinedAt: "2017-06-10", balance: "540.20", action: "Details" },
      { bettor: "Marta Lopez", email: "marta.lopez@example.com", country: "Spain", joinedAt: "2016-07-18", balance: "890.40", action: "Details" },
      { bettor: "Sergey Ivanov", email: "sergey.ivanov@example.com", country: "Russia", joinedAt: "2015-08-22", balance: "1200.60", action: "Details" },
      { bettor: "Yuki Takahashi", email: "yuki.takahashi@example.com", country: "Japan", joinedAt: "2014-09-30", balance: "1100.90", action: "Details" },
      { bettor: "Rachel Bloom", email: "rachel.bloom@example.com", country: "USA", joinedAt: "2013-10-05", balance: "320.50", action: "Details" },
      { bettor: "Mohammed Al-Farhan", email: "mohammed.alfarhan@example.com", country: "Saudi Arabia", joinedAt: "2012-11-12", balance: "2000.00", action: "Details" },
      { bettor: "Anika Mehta", email: "anika.mehta@example.com", country: "India", joinedAt: "2011-12-20", balance: "500.25", action: "Details" },
      { bettor: "David King", email: "david.king@example.com", country: "UK", joinedAt: "2010-01-15", balance: "1500.75", action: "Details" },
      { bettor: "Javier Gonzalez", email: "javier.gonzalez@example.com", country: "Spain", joinedAt: "2009-02-23", balance: "650.00", action: "Details" },
      { bettor: "Sofia Rossi", email: "sofia.rossi@example.com", country: "Italy", joinedAt: "2008-03-30", balance: "780.40", action: "Details" },
      { bettor: "Amir Levi", email: "amir.levi@example.com", country: "Israel", joinedAt: "2007-04-05", balance: "920.30", action: "Details" },
      { bettor: "Emily Stone", email: "emily.stone@example.com", country: "USA", joinedAt: "2006-05-10", balance: "410.80", action: "Details" },
      { bettor: "Carlos Hernandez", email: "carlos.hernandez@example.com", country: "Mexico", joinedAt: "2005-06-15", balance: "570.60", action: "Details" },
      { bettor: "Ariella Green", email: "ariella.green@example.com", country: "Brazil", joinedAt: "2004-07-20", balance: "999.99", action: "Details" },
      { bettor: "Jacob Smith", email: "jacob.smith@example.com", country: "USA", joinedAt: "2003-08-25", balance: "850.10", action: "Details" },
      { bettor: "Maria Ivanova", email: "maria.ivanova@example.com", country: "Russia", joinedAt: "2002-09-30", balance: "300.80", action: "Details" },
      { bettor: "Tommy Lee", email: "tommy.lee@example.com", country: "USA", joinedAt: "2001-10-05", balance: "1250.50", action: "Details" },
      { bettor: "Samantha Wang", email: "samantha.wang@example.com", country: "China", joinedAt: "2000-11-12", balance: "490.90", action: "Details" },
      { bettor: "Omar Ali", email: "omar.ali@example.com", country: "Egypt", joinedAt: "1999-12-20", balance: "330.25", action: "Details" },
      { bettor: "Sophie Thompson", email: "sophie.thompson@example.com", country: "Australia", joinedAt: "1998-01-30", balance: "670.80", action: "Details" },
      { bettor: "Kunal Sharma", email: "kunal.sharma@example.com", country: "India", joinedAt: "1997-02-15", balance: "830.70", action: "Details" },
      { bettor: "Anna Peterson", email: "anna.peterson@example.com", country: "Canada", joinedAt: "1996-03-22", balance: "990.90", action: "Details" },
      { bettor: "George Williams", email: "george.williams@example.com", country: "UK", joinedAt: "1995-04-30", balance: "250.60", action: "Details" },
      { bettor: "Isabella Martinez", email: "isabella.martinez@example.com", country: "Spain", joinedAt: "1994-05-05", balance: "1230.40", action: "Details" },
      { bettor: "Matthew Brown", email: "matthew.brown@example.com", country: "USA", joinedAt: "1993-06-10", balance: "1450.30", action: "Details" },
      { bettor: "Chloe Kim", email: "chloe.kim@example.com", country: "South Korea", joinedAt: "1992-07-18", balance: "980.80", action: "Details" },
      { bettor: "Michael Johnson", email: "michael.johnson@example.com", country: "USA", joinedAt: "1991-08-25", balance: "1130.90", action: "Details" },
      { bettor: "Jessica White", email: "jessica.white@example.com", country: "Canada", joinedAt: "1990-09-30", balance: "750.10", action: "Details" },
      { bettor: "Joshua Thompson", email: "joshua.thompson@example.com", country: "Australia", joinedAt: "1989-10-05", balance: "380.20", action: "Details" },
      { bettor: "Diana Harris", email: "diana.harris@example.com", country: "UK", joinedAt: "1988-11-12", balance: "640.30", action: "Details" },
      { bettor: "Samuel Davis", email: "samuel.davis@example.com", country: "USA", joinedAt: "1987-12-20", balance: "540.40", action: "Details" },
      { bettor: "Ashley Martin", email: "ashley.martin@example.com", country: "USA", joinedAt: "1986-01-30", balance: "850.50", action: "Details" },
      { bettor: "Brian Wright", email: "brian.wright@example.com", country: "Canada", joinedAt: "1985-02-15", balance: "920.60", action: "Details" },
      { bettor: "Sarah Wilson", email: "sarah.wilson@example.com", country: "Australia", joinedAt: "1984-03-22", balance: "690.70", action: "Details" },
      { bettor: "Brian Brown", email: "brian.brown@example.com", country: "USA", joinedAt: "1983-04-30", balance: "450.80", action: "Details" },
      { bettor: "Kevin Garcia", email: "kevin.garcia@example.com", country: "Mexico", joinedAt: "1982-05-05", balance: "350.90", action: "Details" },
      { bettor: "Christine Lee", email: "christine.lee@example.com", country: "Canada", joinedAt: "1981-06-10", balance: "900.00", action: "Details" },
      { bettor: "Nina Lopez", email: "nina.lopez@example.com", country: "USA", joinedAt: "1980-07-18", balance: "780.25", action: "Details" },
      { bettor: "Richard Young", email: "richard.young@example.com", country: "UK", joinedAt: "1979-08-25", balance: "620.80", action: "Details" },
      { bettor: "Abigail Anderson", email: "abigail.anderson@example.com", country: "USA", joinedAt: "1978-09-30", balance: "530.90", action: "Details" },
      { bettor: "Nicholas Harris", email: "nicholas.harris@example.com", country: "Australia", joinedAt: "1977-10-05", balance: "790.60", action: "Details" },
      { bettor: "Olivia Hall", email: "olivia.hall@example.com", country: "Canada", joinedAt: "1976-11-12", balance: "450.70", action: "Details" },
      { bettor: "Hannah Robinson", email: "hannah.robinson@example.com", country: "USA", joinedAt: "1975-12-20", balance: "900.80", action: "Details" },
      { bettor: "David Taylor", email: "david.taylor@example.com", country: "USA", joinedAt: "1974-01-30", balance: "850.90", action: "Details" },
      { bettor: "Sophia Walker", email: "sophia.walker@example.com", country: "Canada", joinedAt: "1973-02-15", balance: "690.10", action: "Details" },
      { bettor: "Lucas Miller", email: "lucas.miller@example.com", country: "USA", joinedAt: "1972-03-22", balance: "300.50", action: "Details" },
      { bettor: "Mia Wilson", email: "mia.wilson@example.com", country: "Australia", joinedAt: "1971-04-30", balance: "620.40", action: "Details" },
      { bettor: "Ella Martinez", email: "ella.martinez@example.com", country: "Canada", joinedAt: "1970-05-05", balance: "1500.60", action: "Details" },
      { bettor: "Ethan Brown", email: "ethan.brown@example.com", country: "USA", joinedAt: "1969-06-10", balance: "550.70", action: "Details" },
      { bettor: "Grace Johnson", email: "grace.johnson@example.com", country: "UK", joinedAt: "1968-07-18", balance: "750.80", action: "Details" },
      { bettor: "Logan Smith", email: "logan.smith@example.com", country: "USA", joinedAt: "1967-08-25", balance: "900.90", action: "Details" },
      { bettor: "Victoria Rodriguez", email: "victoria.rodriguez@example.com", country: "Canada", joinedAt: "1966-09-30", balance: "150.30", action: "Details" },
      { bettor: "Alexander Harris", email: "alexander.harris@example.com", country: "USA", joinedAt: "1965-10-05", balance: "350.40", action: "Details" },
      { bettor: "Abigail Thomas", email: "abigail.thomas@example.com", country: "Australia", joinedAt: "1964-11-12", balance: "600.50", action: "Details" },
      { bettor: "Daniel Lewis", email: "daniel.lewis@example.com", country: "Canada", joinedAt: "1963-12-20", balance: "450.60", action: "Details" },
      { bettor: "Mason Clark", email: "mason.clark@example.com", country: "USA", joinedAt: "1962-01-30", balance: "300.70", action: "Details" },
      { bettor: "Sophia Walker", email: "sophia.walker@example.com", country: "UK", joinedAt: "1961-02-15", balance: "800.80", action: "Details" },
      { bettor: "James Turner", email: "james.turner@example.com", country: "Canada", joinedAt: "1960-03-22", balance: "650.90", action: "Details" },
      { bettor: "Isabella Phillips", email: "isabella.phillips@example.com", country: "USA", joinedAt: "1959-04-30", balance: "700.10", action: "Details" },
      { bettor: "Oliver Scott", email: "oliver.scott@example.com", country: "Australia", joinedAt: "1958-05-05", balance: "800.20", action: "Details" },
      { bettor: "Ava Robinson", email: "ava.robinson@example.com", country: "Canada", joinedAt: "1957-06-10", balance: "400.30", action: "Details" },
      { bettor: "Charlotte Martinez", email: "charlotte.martinez@example.com", country: "USA", joinedAt: "1956-07-18", balance: "950.40", action: "Details" },
      { bettor: "Jack Anderson", email: "jack.anderson@example.com", country: "UK", joinedAt: "1955-08-25", balance: "500.50", action: "Details" },
      { bettor: "Ella Lee", email: "ella.lee@example.com", country: "Canada", joinedAt: "1954-09-30", balance: "700.60", action: "Details" },
      { bettor: "Henry Harris", email: "henry.harris@example.com", country: "USA", joinedAt: "1953-10-05", balance: "650.70", action: "Details" },
      { bettor: "Emily Nelson", email: "emily.nelson@example.com", country: "Australia", joinedAt: "1952-11-12", balance: "780.80", action: "Details" },
      { bettor: "William Baker", email: "william.baker@example.com", country: "Canada", joinedAt: "1951-12-20", balance: "400.90", action: "Details" },
      { bettor: "Olivia Hill", email: "olivia.hill@example.com", country: "USA", joinedAt: "1950-01-30", balance: "320.00", action: "Details" },
      { bettor: "Matthew Lewis", email: "matthew.lewis@example.com", country: "UK", joinedAt: "1949-02-15", balance: "540.10", action: "Details" },
      { bettor: "Ava Young", email: "ava.young@example.com", country: "Canada", joinedAt: "1948-03-22", balance: "610.20", action: "Details" },
      { bettor: "Lucas Scott", email: "lucas.scott@example.com", country: "USA", joinedAt: "1947-04-30", balance: "430.30", action: "Details" },
      { bettor: "Scarlett White", email: "scarlett.white@example.com", country: "Australia", joinedAt: "1946-05-05", balance: "320.40", action: "Details" },
      { bettor: "Sebastian Adams", email: "sebastian.adams@example.com", country: "Canada", joinedAt: "1945-06-10", balance: "780.50", action: "Details" },
      { bettor: "Madison Kelly", email: "madison.kelly@example.com", country: "USA", joinedAt: "1944-07-18", balance: "890.60", action: "Details" },
      { bettor: "Joseph Green", email: "joseph.green@example.com", country: "UK", joinedAt: "1943-08-25", balance: "610.70", action: "Details" },
      { bettor: "Harper Hall", email: "harper.hall@example.com", country: "Canada", joinedAt: "1942-09-30", balance: "890.80", action: "Details" },
      { bettor: "Anthony Harris", email: "anthony.harris@example.com", country: "USA", joinedAt: "1941-10-05", balance: "760.90", action: "Details" },
      { bettor: "Natalie Lee", email: "natalie.lee@example.com", country: "Australia", joinedAt: "1940-11-12", balance: "530.00", action: "Details" },
    ]
  };
  
  export { TableData,DummyPersistentData };
  