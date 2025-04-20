const updateSkill = (id, value) => {
    const skillElement = document.getElementById(id);
    const valueElement = skillElement.querySelector('.skill__value');
    const progressElement = skillElement.querySelector('.skill__progress');

    valueElement.textContent = `${value}/100`;
    progressElement.style.width = `${value}%`;
};

updateSkill("skill1", Number(prompt("Zadejte číslem od 1 do 100 úroveň svých znalostí HTML:")));
updateSkill("skill2", Number(prompt("Zadejte číslem od 1 do 100 úroveň svých znalostí CSS:")));
updateSkill("skill3", Number(prompt("Zadejte číslem od 1 do 100 úroveň svých znalostí JS:")));

