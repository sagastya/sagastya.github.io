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
        url: "https://safe-castle-93667.herokuapp.com/"
    },
    {
        name: "Trump, Tweets, and Trade!",
        language_type: "Python",
        description: "Correlations",
        url: "https://github.com/Atlchris67/GroupOneProject.git"
    }
    // {
    //     name: "NY Citi Bike",
    //     language_type: "Tableau",
    //     description: "Dashboard",
    //     url: "https://tableau.com"
    // },
    // {
    //     name: "Seismic Monitor",
    //     language_type: "JavaSript",
    //     description: "Geo Mapping Earthquakes",
    //     url: "https://github.com/sagastya/leaflet-challenge.git"
    // },
    // {
    //     name: "UFO Sightings",
    //     language_type: "JavaScript",
    //     description: "Dashboard",
    //     url: "https://tableau.com"
    // },
    // {
    //     name: "Destination Hotel",
    //     language_type: "Python",
    //     description: "Python APIs",
    //     url: "github.com/yourrepo"
    // }
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
    <a href="${project.url}">Learn more</a>
    </div>
    `;
    showProjects.appendChild(projectDiv);

})