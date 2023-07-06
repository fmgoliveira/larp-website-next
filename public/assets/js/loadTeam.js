import team from '../../data/team.json';

const loadTeam = () => {
  const teamContainer = document.querySelector('#team-container');
  const teamTemplate = document.querySelector('#team-template');

  team.forEach((member) => {
    const clone = teamTemplate.content.cloneNode(true);
    const memberName = clone.querySelector('.name');
    const memberTitle = clone.querySelector('.role');
    const memberImage = clone.querySelector('.icon');

    memberName.textContent = member.name;
    memberTitle.textContent = member.title;
    memberImage.src = `https://cdn.discordapp.com/avatars/${member.image}.webp?size=512`;

    teamContainer.appendChild(clone);
  });

  teamTemplate.remove();
}