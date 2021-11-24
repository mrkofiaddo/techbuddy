const one= ('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80');
const  two= ('https://images.unsplash.com/photo-1606189934846-a527add8a77b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
const three= ('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
const four= ('https://images.unsplash.com/photo-1596302332910-07f3ac264d7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80');
const five= ('https://images.unsplash.com/flagged/photo-1560854350-13c0b47a3180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80');
const six= ('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80');
const seven= ('https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80');
const products= [
  {
    id: '1',
    title: "Computer Purchase: purchase your computer from us ",
    image: {uri: one},
    avgRating: 4.2,
    ratings: 423,
    price: 200.29,
    oldPrice: 250.98,
    options: ['phone','Computer'],
    description: `Details of service
  - This service will first detect if there is virus on device
  - After detection we analyze and remove all malware 
    on device
  - Select below the approximate number of 
    working days within which you would expect the 
    service to be completed`,
  },
  {
    id: '2',
    title: "Data back-up and recovery: Lets help you recover your lost data",
    image: {uri: two},
    avgRating: 4.8,
    ratings: 2989,
    price: 70.09,
    oldPrice: 89.40,
    description: `Details of service
  - This service will first detect if there is virus on device
  - After detection we analyze and remove all malware 
    on device
  - Select below the approximate number of 
    working days within which you would expect the 
    service to be completed`,
  },
  {
    id: '3',
    title: "Networking: experts in all kinds of computer networking ",
    image: {uri: three},
    avgRating: 3.8,
    ratings: 2989,
    price: 350.70,
    description: `Details of service
  - This service will first detect if there is virus on device
  - After detection we analyze and remove all malware 
    on device
  - Select below the approximate number of 
    working days within which you would expect the 
    service to be completed`,
  },
  {
    id: '4',
    title: "HDD/RAM upgrades: Lets upgrade your computer for a faster experience",
    image: {uri: four},
    avgRating: 4.8,
    ratings: 2989,
    price: 99.98,
    oldPrice: 120.06,
    description: `Details of service
  - This service will first detect if there is virus on device
  - After detection we analyze and remove all malware 
    on device
  - Select below the approximate number of 
    working days within which you would expect the 
    service to be completed`,
  },
  {
    id: '5',
    title: "Virus/Malware removals: Virus and all kinds of virus detection and cleanup",
    image: {uri: five},
    avgRating: 4.8,
    ratings: 2989,
    price: 61.93,
    oldPrice: 65.30,
    description: `Details of service
  - This service will first detect if there is virus on device
  - After detection we analyze and remove all malware 
    on device
  - Select below the approximate number of 
    working days within which you would expect the 
    service to be completed`,
  },
  {
    id: '6',
    title: "Password Reset/Recovery",
    image: {uri: six},
    avgRating: 4.8,
    ratings: 2989,
    price: 75.03,
    oldPrice: 80.78,
    description: `Details of service
  - This service will first detect if there is virus on device
  - After detection we analyze and remove all malware 
    on device
  - Select below the approximate number of 
    working days within which you would expect the 
    service to be completed`,
  },
  {
    id: '7',
    title: "Resume assistannce: Lets help you write a professional resume",
    image: {uri: seven},
    avgRating: 4.8,
    ratings: 2989,
    price: 99.98,
    oldPrice: 120.06,
    description: `Details of service
  - This service will first detect if there is virus on device
  - After detection we analyze and remove all malware 
    on device
  - Select below the approximate number of 
    working days within which you would expect the 
    service to be completed`,
  },
];

export default products