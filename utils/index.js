import ProjectsData from '../data/projects.json';
import TagsData from '../data/tags.json';

export function getProjectDetails(id) {
    return ProjectsData.find(project => project.id === id);
}

export function getTagDetails(id) {
    return TagsData.find(tag => tag.id === id);
}