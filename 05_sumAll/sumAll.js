const sumAll = function(int1, int2) {
    let answer = 0;

    if (int1 < 0 || int2 < 0 || typeof(int1) != "number" || typeof(int2) != "number") {
        answer = 'ERROR';
    } else if (int1 <= int2) {
        for (let i=int1; i<=int2; i++)
            answer += i;
    } else {
        for (let i=int2; i<=int1; i++)
            answer += i;
    }

    return answer;
};

// Do not edit below this line
module.exports = sumAll;
