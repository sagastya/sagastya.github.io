var showProjects = document.querySelector("#show-projects")

var projects = [
    {
        name: "Diabetes Predictor",
        language_type: "Python",
        description: "Machine Learning",
        url: "https://jssicc-finalproject.herokuapp.com/"
    },
    {
        name: "Pandemic Stock",
        language_type: "JavaScript",
        description: "Data Visualization",
        url: "https://tweetsandtrade.herokuapp.com/"
    },
    {
        name: "Trump, Tweets, and Trade!",
        language_type: "Python",
        description: "Statistical Correlations",
        url: "https://github.com/Atlchris67/GroupOneProject.git"
    }
]

projects.map(function (project) {
    // console.log(project);
    var projectDiv = document.createElement("div");
    projectDiv.classList.add("rounded", "text-center", "col-lg-4", "card")
    projectDiv.innerHTML = `
    <h5 style="color:#311b92">${project.name}</h5>
    <div>
    <p>${project.language_type}</p>
    <p>${project.description}</p>
    <a href="${project.url}" target=_blank>Learn more</a>
    </div>
    `;
    showProjects.appendChild(projectDiv);

})