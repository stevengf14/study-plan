/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = [];
    for (let asteroid of asteroids) {
        let exploded = false;

        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            if (Math.abs(asteroid) > stack[stack.length - 1]) {
                stack.pop();
            } else if (Math.abs(asteroid) === stack[stack.length - 1]) {
                stack.pop();
                exploded = true;
                break;
            } else {
                exploded = true;
                break;
            }
        }
        if (!exploded) {
            stack.push(asteroid);
        }
    }
    return stack;
};
