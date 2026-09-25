document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('absolute');
      menu.classList.toggle('top-20');
      menu.classList.toggle('left-0');
      menu.classList.toggle('right-0');
      menu.classList.toggle('flex-col');
      menu.classList.toggle('items-start');
      menu.classList.toggle('bg-white');
      menu.classList.toggle('border-b');
      menu.classList.toggle('p-4');
    });
  }

  const addSkillButton = document.querySelector('.add-skill-btn');
  const skillList = document.querySelector('.skills-wrap');

  if (addSkillButton && skillList) {
    addSkillButton.addEventListener('click', () => {
      const skill = window.prompt('Add a new skill:', 'React');
      if (!skill || !skill.trim()) return;

      const tag = document.createElement('span');
      tag.className = 'skill-pill inline-flex items-center gap-2 rounded-full border border-green-600/10 bg-green-600/10 px-3 py-2 text-xs font-semibold text-green-600';
      tag.innerHTML = `${skill.trim()} <button type="button" class="remove-skill border-0 bg-transparent text-green-600" aria-label="Remove skill"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>`;
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
