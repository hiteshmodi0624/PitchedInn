export const setProgressBarState = (state: number) => {
  const progress = document.getElementById("progress");
  if (progress) {
    if (state === 100) {
      setTimeout(() => {
        progress.style.opacity = "0";
      }, 500);
    } else {
      progress.style.opacity = "100%";
    }
    progress.style.width = state + "%";
  }
};
