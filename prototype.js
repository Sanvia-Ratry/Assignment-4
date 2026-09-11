console.log("hi.....js");

const section_all_jobs = document.getElementById("all-jobs");
const all_job_container = document.getElementById("job-container");
const section_interview = document.getElementById("Interviewed");
const section_rejected = document.getElementById("Rejected");

/* nav li */
const all_job_list = document.getElementById("default");
const interview_list = document.getElementById("interview-list");
const reject_list = document.getElementById("reject-list");

const nav_list = document.querySelector("ul");
nav_list.addEventListener("click", activeList);
function activeList(e) {
  if (e.target.id === "interview-list") {
    section_interview.classList.remove("hidden");
    all_job_container.classList.add("hidden");
    section_rejected.classList.add("hidden");
    const current_tab = e.target;
    reject_list.classList.remove("blue");
    current_tab.classList.add("blue");
    all_job_list.classList.remove("blue");
    updateUI("interview", section_interview);
  }
  if (e.target.id === "reject-list") {
    section_rejected.classList.remove("hidden");
    all_job_container.classList.add("hidden");
    section_interview.classList.add("hidden");
    const current_tab = e.target;
    current_tab.classList.add("blue");
    interview_list.classList.remove("blue");
    all_job_list.classList.remove("blue");
    updateUI("cancelled", section_rejected);
  }
  if (e.target.id === "default") {
    section_interview.classList.add("hidden");
    section_rejected.classList.add("hidden");
    all_job_container.classList.remove("hidden");
    const current_tab = e.target;
    current_tab.classList.add("blue");
    interview_list.classList.remove("blue");
    reject_list.classList.remove("blue");
  }
}
console.log(nav_list);

all_job_container.addEventListener("click", toggle);
section_interview.addEventListener("click", toggle);
section_rejected.addEventListener("click", toggle);

function toggle(e) {
  if (e.target.tagName !== "BUTTON") {
    return;
  }
  if (e.target.innerText === "Interview") {
    const div = e.target.closest(".job-card");
    section_interview.append(div);
    count("interview");
    count("cancelled");
    updateUI("interview", section_interview);
    updateUI("cancelled", section_rejected);
    updateBadge("interview", div);
  }
  if (e.target.innerText === "Cancelled") {
    const div = e.target.closest(".job-card");
    section_rejected.append(div);
    console.log("cancelled clicked:");
    console.log(section_rejected);
    count("cancelled");
    count("interview");
    updateUI("cancelled", section_rejected);
    updateUI("interview", section_interview);
    updateBadge("cancelled", div);
  }
}
function count(str) {
  if (str == "interview") {
    const div_count = document.querySelectorAll("#Interviewed .job-card");
    const interviewCountDiv = document.getElementById("interview-job");
    const count = div_count.length;
    interviewCountDiv.querySelector("p").innerText = count;
    console.log("count is working....", count);
  }
  if (str == "cancelled") {
    const div_count = document.querySelectorAll("#Rejected .job-card");
    const RejectCountDiv = document.getElementById("rejected-job");
    const count = div_count.length;
    RejectCountDiv.querySelector("p").innerText = count;
    console.log("count is working....", count);
  }
}
function updateUI(str, element) {
  const placeHolderDiv = element.querySelector(".place-holder");
  if (str == "interview") {
    const jobs = element.getElementsByClassName("job-card").length;
    const isEmpty = jobs === 0;
    if (!isEmpty) {
      placeHolderDiv.classList.add("hidden");
      console.log(placeHolderDiv);
    } else {
      placeHolderDiv.classList.remove("hidden");
    }
  }
  if (str == "cancelled") {
    const jobs = element.getElementsByClassName("job-card").length;
    const isEmpty = jobs === 0;
    if (!isEmpty) {
      placeHolderDiv.classList.add("hidden");
      console.log(placeHolderDiv);
    } else {
      placeHolderDiv.classList.remove("hidden");
    }
  }
  const jobs = all_job_container.getElementsByClassName("job-card").length;
  const isEmpty = jobs === 0;
  if (isEmpty) {
    const placeHolderDiv = section_all_jobs.querySelector(".place-holder");
    placeHolderDiv.classList.remove("hidden");
    console.log(placeHolderDiv);
  }
}
function updateBadge(str, div) {
  const interview_badge = div.querySelector(".interview-badge");
  const rejected_badge = div.querySelector(".rejected-badge");
  const badge = div.querySelector(".not-applied");

  if (str == "interview") {
    badge.innerText = "Interview";
    badge.classList.add("green-highlight");
    console.log("highlight worked");
  }
  if (str == "cancelled") {
    badge.innerText = "Cancelled";
    badge.classList.add("red-highlight");
  }
}
