let projects = [
    {
        projectTitle: 'Daily Planner',
        projectGitHub: 'https://github.com/hstor3/planner',
        projectUrl: 'https://hstor3.github.io/planner/',
        screenShot: './photos/dailyplanner.png',
        tech: ['html', ' css', ' javascript']
    },

    {
        projectTitle: 'Weather Dashboard',
        projectGitHub: 'https://github.com/hstor3/weather-dashboard',
        projectUrl: 'https://hstor3.github.io/weather-dashboard/',
        screenShot: './photos/weatherboard.png',
        tech: ['html', ' css', ' javascript']
    },

    {
        projectTitle: 'Timed Quiz',
        projectGitHub: 'https://github.com/hstor3/timed-quiz',
        projectUrl: 'https://hstor3.github.io/timed-quiz/',
        screenShot: './photos/timedquiz.png',
        tech: ['html', ' css', ' javascript']
    },

    {
        projectTitle: 'Password Generator',
        projectGitHub: 'https://github.com/hstor3/prompt_pass_generator',
        projectUrl: 'https://hstor3.github.io/prompt_pass_generator/',
        screenShot: './photos/passgen.png',
        tech: ['html', ' css', ' javascript']
    }, 
    {
        projectTitle: 'Treat Yo Shelf',
        projectGitHub: 'https://github.com/hstor3/treat-yo-shelf',
        projectUrl: 'https://treatyourshelf.herokuapp.com/',
        screenShot: './photos/treatyoshelf.png',
        tech: ['Greensock', 'CSS', 'Handlebars', 'Express', 'Node.js', 'MySQL']
    },
    {
        projectTitle: 'MVC Blog',
        projectGitHub: 'https://github.com/hstor3/turtle-sniffles',
        projectUrl: 'https://warm-bayou-06994.herokuapp.com/',
        screenShot: 'photos/blog.gif',
        tech: ['CSS', 'Handlebars', 'Express', 'Node', 'MySQL', 'JavaScript', 'Express']
    }
]

let index = 0

$(document).ready(function () {
    function buildCard() {

        let img = $('<img>').addClass('card-img').attr('id', 'projectImg').attr('src', projects[index].screenShot);
        let cardBody = $('<div>').addClass('card-body');
        let cardTitle = $('<h3>').addClass('card-title').text(projects[index].projectTitle);
        let link = $('<a target="_blank">').attr('href', projects[index].projectUrl);
        let gitHub = $('<a target="_blank">').addClass('gitHub text-center').attr('href', projects[index].projectGitHub).text(projects[index].projectGitHub);
        let lang = $('<div>').addClass('text-center').text("This project includes: " + projects[index].tech)

        let nextBtn = $('<button>').text('Next').addClass('nextBtn btn btn-primary').on('click', function () {
            index = ++index % projects.length;
            buildCard();
        })

        let backBtn = $('<button>').text('Back').addClass('backBtn btn btn-primary').on('click', function () {
            if (index == 0) {
                index = projects.length - 1
            } else {
                index--;
            }
            buildCard();
        })
        $('#projectCard').empty();
        $('#projectCard').append(cardTitle, link.append(img), lang, gitHub, cardBody.append(backBtn, nextBtn));
    };
    buildCard();
})