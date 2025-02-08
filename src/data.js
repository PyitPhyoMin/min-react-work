import { v4 as uuidv4 } from 'uuid';

export const workData = [
    {
      id : uuidv4(),
      urlDescription: 'Mini Shopping Cart Project',
      projectDescription1: 
      "A group project for mini shopping cart that allows users to view, add and remove items from the cart.",
      projectDescription2: 
      "I developed HomePage and ProductPage including design and functionality. " +
      "Built with mockApi, Axios, useState, useEffect, useContext, and useReducer.",
      url: "https://themartreact.vercel.app/",
      sourceCodeLink:"https://github.com/PyitPhyoMin/react-minimart-project",
      image1: "https://drive.google.com/file/d/1-3RQg-0lPRbot1rvwmhR478U6_laciZJ/view?usp=drive_link",
      image2: "https://drive.google.com/file/d/1-92SIHu3PgFFqKdSGs0H-wUXIZ_1fGfJ/view?usp=drive_link"
    },
    {
      id : uuidv4(),
      urlDescription: 'Product Processing Page with Actions',
      projectDescription1: 
      "Product Page with actions such as Add, Edit and Delete from table.",
      projectDescription2: 
      "Implemented with useContext, useReducer and Conditional Rendering.",
      url: "https://productaction.vercel.app/",
      sourceCodeLink:"https://github.com/PyitPhyoMin/product-processing-lists",
      image1: "",
      image2: ""
    },
    {
      id : uuidv4(),
      urlDescription: 'Retrieve Singapore Travel Data via API',
      projectDescription1:
      "This React page can display Singapore travel data using Open Data Licence API from Singapore ICA (Immigration and Checkpoints Authority).",
      projectDescription2: 
      "Using Axios and Conditional Rendering for data retrieval and display.",
      url: "https://travelinfoapi.netlify.app/",
      sourceCodeLink:"https://github.com/PyitPhyoMin/axios-data-retrieval",
      image1: "",
      image2: ""
    }
  ];
  