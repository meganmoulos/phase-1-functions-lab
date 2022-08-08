// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    if (street >= 42) {
        let blocks = street - 42;
        return blocks;
    } else {
        let blocks = 42 - street;
        return blocks;
    } 
}

function distanceFromHqInFeet (blocks) {
    let feet = distanceFromHqInBlocks(blocks) * 264;
    return feet;
}

function distanceTravelledInFeet (start, destination) {
    if (destination > start) {
        let distance = (destination - start) * 264;
        return distance;
    } else {
        let distance = (start - destination) * 264
        return distance;
    }
}

function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    }
}