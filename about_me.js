const SKILL_SECTIONS = [
    'Concepts',
    'Languages',
    'Programs',
    'Engineering Programs'
];
const SKILL_ITEMS = [
    ['Extreme Programming (XP)', '<b>Object-Oriented Programming (OOP)</b>', 'Agile', 'Scrum', 'RESTful APIs', 'Relational Database Management Systems (RDBMS)'],
    ['<b>Python</b>', 'Swift', 'Java', 'HTML', 'CSS (Native & Bootstrap)', 'JavaScript', 'JSON', 'XML', 'C++ (Arduino)'],
    ['Slack', '<b>Git</b>', 'XCode', 'Make', 'Docker', 'Google Cloud Platform (GCP)', 'mySQL', 'PostgreSQL', 'SQLAlchemy', 'Flask', 'ReactJS'],
    ['MATLAB', 'Adobe Creative Cloud (CC)', 'Google Earth', 'MicroStation', 'ProjectWise', 'SolidWorks']
]

function loadSkills() {
    const COL_NUM = 12 / SKILL_SECTIONS.length;

    for (i = 0; i < SKILL_SECTIONS.length; i++) {
        curSkill = SKILL_SECTIONS[i].replace(' ', '');
        
        // add skill column div
        $('#skills').append(
            '<div id="' + curSkill + '" class="col-' + COL_NUM + '"></div>'
        );

        // add skill column div header and ul
        $('#' + curSkill)
        .append(
            '<h4 class="text-center">' + SKILL_SECTIONS[i] + '</h4>'
        ).append(
            '<ul id="' + curSkill + 'list" class="list-group list-group-flush"></ul>'
        );

        // populate skill column div
        for (j = 0; j < SKILL_ITEMS[i].length; j++) {
            $('#' + curSkill + 'list').append(
                '<li class="list-group-item bg-transparent">' + SKILL_ITEMS[i][j] + '</li>'
            );
        }
    }
}