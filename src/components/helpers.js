// these are used to determine which class to apply for styling purposes

// this sets photo border color for full stack or front end dev
export const borderColor = (title) => {
  if (title === "FULL STACK DEVELOPER") {
    return "fsYellow";
  } else {
    return "feBlue";
  }
};

// this sets photo button color for full stack or front end dev
export const buttonColor = (title) => {
  if (title === "FULL STACK DEVELOPER") {
    return "fsButtonYellow";
  } else {
    return "feButtonBlue";
  }
};

// this sets photo border and close button color
export const colorSet = (title) => {
  if (title === "FULL STACK DEVELOPER") {
    return "primary";
  } else {
    return "secondary";
  }
};

export const DevCardAddClass = (title) => {
  if (title === "FULL STACK DEVELOPER") {
    return "full-stack";
  } else {
    return "front-end";
  }
};
