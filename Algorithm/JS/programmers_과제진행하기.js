function solution(plans) {
  const sortedPlans = plans
    .map((plan) => {
      const [name, startTime, playtime] = plan;
      const [hour, minute] = startTime.split(":");
      return [name, Number(hour) * 60 + Number(minute), Number(playtime)];
    })
    .sort((a, b) => b[1] - a[1]);

  const ans = [];
  let curPlan = sortedPlans.pop();
  let curTime = curPlan[1];
  const delayedPlan = [];

  while (sortedPlans.length) {
    const nextPlan = sortedPlans.pop();
    const [_name, nextTime, _playtime] = nextPlan;

    if (curTime + curPlan[2] < nextTime) {
      ans.push(curPlan[0]);
      if (delayedPlan.length) {
        curTime += curPlan[2];
        curPlan = delayedPlan.pop();
        sortedPlans.push(nextPlan);
      } else {
        curTime = nextTime;
        curPlan = nextPlan;
      }
    } else if (curTime + curPlan[2] === nextTime) {
      ans.push(curPlan[0]);
      curTime = nextTime;
      curPlan = nextPlan;
    } else {
      delayedPlan.push([
        curPlan[0],
        curTime,
        curPlan[2] - (nextTime - curTime),
      ]);
      curPlan = nextPlan;
      curTime = nextTime;
    }
  }

  ans.push(curPlan[0]);

  while (delayedPlan.length) {
    ans.push(delayedPlan.pop()[0]);
  }

  return ans;
}
