  
const skills = [
    { css: "skill-html", skillName: "HTML", skillLevel: 60 },
    { css: "skill-css", skillName: "CSS", skillLevel: 40 },
    { css: "skill-php", skillName: "PHP", skillLevel: 30 },

];


function addSkills() {
    const dl = document.createElement('dl');
    dl.classList.add('skills-list');
    skills.forEach(skill => {
        const dt = document.createElement('dt');
        dt.textContent = skill.skillName;
        dt.classList.add(skill.css);

        const dd = document.createElement('dd');
        dd.classList.add('level');

        const div = document.createElement('div');
        div.style.width = skill.skillLevel + '%';
        div.textContent = skill.skillLevel;
        
        dd.insertBefore(div, null);
        dl.append(dt);
        dl.append(dd);
    });
    document.querySelector('.skills').append(dl);
}

addSkills();