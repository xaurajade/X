const welcomeModal = document.querySelector('#welcome-modal');
const useModal = document.querySelector('#use-dialog');
const useTitle = document.querySelector('#use-title');
const useArea = document.querySelector('#use-area');
const useDuration = document.querySelector('#use-duration');

if (welcomeModal instanceof HTMLDialogElement) {
  welcomeModal.showModal();
}

if (
  useModal instanceof HTMLDialogElement &&
  useTitle instanceof HTMLElement &&
  useArea instanceof HTMLElement &&
  useDuration instanceof HTMLElement
) {
  document.querySelectorAll('.product-howto').forEach((button) => {
    button.addEventListener('click', () => {
      const product = button.dataset.product;
      const area = button.dataset.area;
      const duration = button.dataset.duration;

      if (!product || !area || !duration) {
        return;
      }

      useTitle.textContent = `${product} nasıl kullanılır?`;
      useArea.textContent = area;
      useDuration.textContent = duration;
      useModal.showModal();
    });
  });
}

document.querySelectorAll('.product-content-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const ingredients = button.closest('.product-info')?.querySelector('.product-ingredients');
    const product = button.closest('.product-info')?.querySelector('h3')?.textContent?.trim();
    const contentModal = document.querySelector('#content-dialog');
    const contentTitle = document.querySelector('#content-title');
    const contentDescription = document.querySelector('#content-description');

    if (
      !(ingredients instanceof HTMLElement) ||
      !(contentModal instanceof HTMLDialogElement) ||
      !(contentTitle instanceof HTMLElement) ||
      !(contentDescription instanceof HTMLElement) ||
      !product
    ) {
      return;
    }

    contentTitle.textContent = `${product} içerik bilgisi`;
    contentDescription.textContent = ingredients.textContent?.trim() ?? '';
    contentModal.showModal();
  });
});
