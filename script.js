document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('mobile-menu-active');
    });
  }

  const addSkillButton = document.querySelector('.add-skill-btn');
  const skillList = document.querySelector('.skills-wrap');

  if (addSkillButton && skillList) {
    addSkillButton.addEventListener('click', () => {
      const skill = window.prompt('Add a new skill:', 'React');
      if (!skill || !skill.trim()) return;

      const tag = document.createElement('span');
      tag.className = 'skill-pill';
      tag.innerHTML = `${skill.trim()} <button type="button" class="remove-skill" aria-label="Remove skill">×</button>`;
      skillList.appendChild(tag);

      tag.querySelector('.remove-skill').addEventListener('click', () => tag.remove());
    });
  }

  document.querySelectorAll('.remove-skill').forEach((button) => {
    button.addEventListener('click', () => {
      button.closest('.skill-pill')?.remove();
    });
  });
});
