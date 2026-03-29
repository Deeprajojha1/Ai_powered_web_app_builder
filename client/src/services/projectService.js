import api from './api.js';

const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data.data;
};

const getProject = async (projectId) => {
  const response = await api.get(`/projects/${projectId}`);
  return response.data.data;
};

const createProject = async (title) => {
  const response = await api.post('/projects', title ? { title } : {});
  return response.data.data;
};

const updateProject = async (projectId, updates) => {
  const response = await api.put(`/projects/${projectId}`, updates);
  return response.data.data;
};

const deleteProject = async (projectId) => {
  const response = await api.delete(`/projects/${projectId}`);
  return response.data.data;
};

export { getProjects, getProject, createProject, updateProject, deleteProject };
