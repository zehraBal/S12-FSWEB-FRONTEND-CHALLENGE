export const dataSelector = (store) => store.data || {};
export const basicInfoSelector = (store) => dataSelector(store).basicInfo;
export const projectsSelector = (store) => dataSelector(store).projects;
export const frontendProjectsSelector = (store) =>
  dataSelector(store).projects.frontendContent;
export const backendProjectsSelector = (store) =>
  dataSelector(store).projects.backendContent;
export const footerSelector = (store) => dataSelector(store).footer;
export const summarySelector = (store) => dataSelector(store).summary;
export const languageSelector = (store) => store.language;
export const skillSelector = (store) => dataSelector(store).skills.categories;
export const aboutSelector = (store) => dataSelector(store).about;
export const eduSelector = (store) => dataSelector(store).education;
export const langSelector = (store) => dataSelector(store).languages;
export const certSelector = (store) => dataSelector(store).certificates;
