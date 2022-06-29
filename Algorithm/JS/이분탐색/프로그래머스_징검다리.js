// 정답의 범위가 정해졌을 때 쓸 수 있는 효율적인 방법
function solution(distance, rocks, n) {
    let [ left, right ] = [ 1, distance ];
    let answer = 0;
    rocks.sort((a, b) => a - b);
    
    while (left <= right) {
        let count = 0;
        let prev = 0;
        const mid = Math.floor((left + right) / 2);
        for (const rock of rocks) {
            if (rock - prev <= mid) {
                count++;
            } else {
                prev = rock;
            }
        }
        
        if (count > n) {
            right = mid - 1;
        } else {
            left = mid + 1;
            answer = Math.max(answer, left);
        }
    }
    
    return answer;
}