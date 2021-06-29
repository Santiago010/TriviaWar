const Countdown = (deadline) => {
  let now = new Date();
  let remainTime = (new Date(deadline) - now + 1000) / 1000;
  return ("0" + Math.floor(remainTime % 60)).slice(-2);
};

export default Countdown;
