import { useState, useEffect } from 'react';
import siteContent from '../../content/site.json';

interface Project {
  slug: string;
  title: string;
  one_liner: string;
  tags: string[];
  timeframe?: string;
  role?: string;
  team?: string;
  stack?: string[];
  problem: string[];
  approach: string[];
  contributions: string[];
  results: string[];
  media: {
    type: 'youtube' | 'vimeo';
    embed_url: string;
  };
  sub_media?: {
    type: 'youtube' | 'vimeo';
    embed_url: string;
  };
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
    slides?: string;
  };
}

interface Props {
  isOpen: boolean;
  projectSlug: string | null;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, projectSlug, onClose }: Props) {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      const found = siteContent.projects.find((p: Project) => p.slug === projectSlug);
      setProject(found || null);
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, projectSlug, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-900">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              {project.one_liner}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {(project.timeframe || project.role || project.team || project.stack) && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {project.timeframe && (
                <div>
                  <p className="font-semibold text-gray-900">Timeframe</p>
                  <p className="text-gray-600">{project.timeframe}</p>
                </div>
              )}
              {project.role && (
                <div>
                  <p className="font-semibold text-gray-900">Role</p>
                  <p className="text-gray-600">{project.role}</p>
                </div>
              )}
              {project.team && (
                <div>
                  <p className="font-semibold text-gray-900">Team</p>
                  <p className="text-gray-600">{project.team}</p>
                </div>
              )}
              {project.stack && project.stack.length > 0 && (
                <div>
                  <p className="font-semibold text-gray-900">Stack</p>
                  <p className="text-gray-600">{project.stack.join(', ')}</p>
                </div>
              )}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🎯 Problem
              </h3>
              <ul className="space-y-2 text-gray-700">
                {project.problem.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                💡 Approach
              </h3>
              <ul className="space-y-2 text-gray-700">
                {project.approach.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              🚀 My Contribution
            </h3>
            <ul className="space-y-2 text-gray-700">
              {project.contributions.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              📊 Results
            </h3>
            <ul className="space-y-2 text-gray-700">
              {project.results.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              🎬 Demo Video
            </h3>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src={project.media.embed_url}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${project.title} demo`}
              />
            </div>
          </div>

          <div>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src={project.sub_media.embed_url}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${project.title} sub demo`}
              />
            </div>
          </div>

          {project.links && (project.links.github || project.links.demo || project.links.paper || project.links.slides) && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🔗 Links
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.links.paper && (
                  <a
                    href={project.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Paper
                  </a>
                )}
                {project.links.slides && (
                  <a
                    href={project.links.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Slides
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
