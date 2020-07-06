export const LOCAL_STORAGE_PROJECTS = "project.lists";

export let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS)) || [];