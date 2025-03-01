let totalTask = 6;
document.querySelectorAll("button:not(.clear-btn)").forEach((button) => {
  button.addEventListener("click", (event) => {
    let pendingTask = parseInt(document.getElementById("total-task").innerText);
    let completedTask = parseInt(
      document.getElementById("completed-task").innerText,
    );
    if (pendingTask > 0) {
      alert("Board updated successfully");
      pendingTask -= 1;
      if (pendingTask === 0) {
        alert("Congratulations!!! You have completed all current tasks");
      }
      document.getElementById("total-task").innerText = pendingTask;
      document.getElementById("completed-task").innerText = completedTask + 1;
      const grandParent = event.target.parentElement.parentElement;
      const taskTitle = grandParent.querySelector("h2").innerText;
      const p = document.createElement("p");
      p.innerText = `You have completed the task ${taskTitle} at ${getCurrentTime()}`;
      p.classList.add("history");
      document.getElementById("activity-log").appendChild(p);

      disableButton(event.target);
    } else {
      alert("No task to complete");
    }
  });
});

document.getElementById("clear-history").addEventListener("click", () => {
  const activityLog = document.getElementById("activity-log");
  activityLog.innerHTML = "";
});

function disableButton(targetButton) {
  targetButton.setAttribute("disabled", true);
  targetButton.style.backgroundColor = "#3752fd30";
  targetButton.classList.remove("cursor-pointer");
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const strTime = `${hours.toString()}:${minutes.toString()}:${seconds.toString()} ${ampm}`;
  return strTime;
}

// calender
let now = new Date();
const options = { month: "short", day: "numeric", year: "numeric" };
let formattedDate = now.toLocaleDateString("en-US", options);
document.getElementById("day").innerText = now.toLocaleDateString("en-US", {
  weekday: "short",
});
document.getElementById("month").innerText = formattedDate;
