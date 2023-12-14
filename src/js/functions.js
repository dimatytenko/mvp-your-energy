export const getRenderCategories = (categories, container) => {
  const markup = categories.reduce((acc, { filter, imgURL, name }) => {
    acc += `<li class="categories__card-item">
        <img
          src="${imgURL}"
          alt="${name}"
          class="categories__card-img"
        />
        <h2 class="categories_card-title">${name}</h2>
        <p class="categories__card-text">${filter}</p>
      </li>`;
    return acc;
  }, '');
  container.innerHTML = markup;
};
