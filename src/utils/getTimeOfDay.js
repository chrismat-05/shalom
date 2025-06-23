export function getTimeOfDay() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 6 && hour < 18) {
    return "morning";
  } else {
    return "night";
  }
}