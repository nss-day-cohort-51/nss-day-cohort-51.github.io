//Purpose: Creates fetch calls to database.json

let allData = {};

export const getAllData = () => {
  fetch("api/database.json")
    .then((res) => res.json())
    .then((data) => {
      allData = data;
    });
};

export const getAllDevs = () => {
  return allData.users;
};

export const getAllTechStackItems = () => {
  return allData.techStack;
};
