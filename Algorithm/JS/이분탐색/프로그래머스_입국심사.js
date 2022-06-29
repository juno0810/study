function solution(n, times) {
    times.sort((a, b) => a - b);
    let [ left, right ] = [ 1, n * times[times.length - 1] ];
    let answer = right;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        let idx = 0;
        while (idx <= times.length) {
            count += Math.floor(mid / times[idx]);
            if (count >= n) {
                answer = Math.min(answer, mid);
                break;
            }
            idx++;
        }
        if (count >= n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return answer;
}