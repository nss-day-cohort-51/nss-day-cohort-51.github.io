// these are used to determine which class to apply for styling purposes 

// this sets photo border color for full stack or front end dev
export const borderColor = (title) => {
    if (title === "FULL STACK DEVELOPER") {
        return "fsYellow";
    } else {
        return "feBlue";
    }
}

// this sets photo button color for full stack or front end dev
export const buttonColor = (title) => {
    if (title === "FULL STACK DEVELOPER") {
        return "fsButtonYellow dev-card__button";
    } else {
        return "feButtonBlue dev-card__button";
    }
};

// this sets photo border and close button color
const colorSet = (title) => {
    if (title === "FULL STACK DEVELOPER") {
        return "primary";
    } else {
        return "secondary";
    }
};

export const DevCardTitleBG = (title) => {
    if (title === "FULL STACK DEVELOPER") {
        return "dev-card-title__block full-stack";
    } else {
        return "dev-card-title__block front-end";
    }
}