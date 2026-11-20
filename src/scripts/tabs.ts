export function bindTabs(list: HTMLElement, onSelect: (id: string, tab: HTMLElement) => void) {
  const tabs = [...list.querySelectorAll<HTMLElement>('[role="tab"]')];
  const select = (tab: HTMLElement, focus: boolean) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      t.classList.toggle('active', on);
    });
    if (focus) tab.focus();
    onSelect(tab.dataset.tab || '', tab);
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab, false));
    tab.addEventListener('keydown', (e) => {
      const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (e.key in keys) {
        e.preventDefault();
        select(tabs[(i + keys[e.key] + tabs.length) % tabs.length], true);
      } else if (e.key === 'Home' || e.key === 'End') {
        e.preventDefault();
        select(tabs[e.key === 'Home' ? 0 : tabs.length - 1], true);
      }
    });
  });
}
