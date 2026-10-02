"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon, StarIcon, GitForkIcon, Loader2Icon, GlobeIcon, XIcon, AlertCircleIcon, RefreshCwIcon, FolderOpenIcon } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

interface Project {
  name: string;
  description: string;
  tags: string[];
  stars: number;
  forks: number;
  url: string;
  liveUrl?: string;
}

interface GithubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
  html_url: string;
}

const projectRepos = [
  "AetherCanvas",
  "Synergy-Flow",
  "GB-Coder-Public-Beta",
  "Lade-Studio",
  "Lade-Stack-AI-Dev-Hub",
  "Artify"
];

const fallbackProjects: Project[] = [
  {
    name: "AetherCanvas",
    description: "A powerful AI-driven design tool for creating stunning visuals and graphics with ease.",
    tags: ["TypeScript", "Next.js", "AI", "Canvas API"],
    stars: 0,
    forks: 0,
    url: "https://github.com/girishlade111/AetherCanvas",
    liveUrl: "https://aethercanvas.vercel.app"
  },
  {
    name: "Synergy-Flow",
    description: "Collaborative workflow management platform with real-time synchronization and team features.",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    stars: 0,
    forks: 0,
    url: "https://github.com/girishlade111/Synergy-Flow",
    liveUrl: "https://synergy-flow.vercel.app"
  },
  {
    name: "GB-Coder Public Beta",
    description: "An intelligent code editor with AI-powered suggestions and syntax highlighting.",
    tags: ["TypeScript", "Monaco Editor", "AI", "Electron"],
    stars: 0,
    forks: 0,
    url: "https://github.com/girishlade111/GB-Coder-Public-Beta"
  },
  {
    name: "Lade-Studio",
    description: "Creative studio suite for designers and developers with integrated tools and plugins.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    stars: 0,
    forks: 0,
    url: "https://github.com/girishlade111/Lade-Studio",
    liveUrl: "https://lade-studio.vercel.app"
  },
  {
    name: "Lade-Stack-AI-Dev-Hub",
    description: "AI development hub with pre-built templates, models, and deployment pipelines.",
    tags: ["Python", "TensorFlow", "Docker", "FastAPI"],
    stars: 0,
    forks: 0,
    url: "https://github.com/girishlade111/Lade-Stack-AI-Dev-Hub"
  },
  {
    name: "Artify",
    description: "Transform your photos into art with AI-powered filters and creative effects.",
    tags: ["React", "TensorFlow.js", "Canvas", "WebGL"],
    stars: 0,
    forks: 0,
    url: "https://github.com/girishlade111/Artify",
    liveUrl: "https://artify-demo.vercel.app"
  }
];

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const fetchRepoData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Static-site friendly: query the public GitHub API directly
      // (no server-side /api proxy — this repo builds with output:"export").
      const repoDataPromises = projectRepos.map(async (repoName) => {
        const response = await fetch(
          `https://api.github.com/repos/girishlade111/${repoName.trim()}`,
          { headers: { Accept: "application/vnd.github.v3+json" } }
        );
        if (!response.ok) return null;
        const data = await response.json();
        return {
          name: data.name,
          description: data.description,
          stars: data.stargazers_count,
          forks: data.forks_count,
          language: data.language,
          topics: data.topics || [],
          html_url: data.html_url,
          updated_at: data.updated_at,
        } as GithubRepo;
      });

      const repos = (await Promise.all(repoDataPromises)).filter(
        (repo): repo is GithubRepo => repo !== null
      );

      if (repos.length > 0) {
        const updatedProjects = repos.map((repo: GithubRepo) => {
          const fallbackProject = fallbackProjects.find(p => p.name === repo.name);
          return {
            name: repo.name,
            description: repo.description || fallbackProject?.description || "No description available",
            tags: repo.topics.length > 0 ? repo.topics.slice(0, 4) : [repo.language].filter(Boolean),
            stars: repo.stars,
            forks: repo.forks,
            url: repo.html_url,
            liveUrl: fallbackProject?.liveUrl
          };
        });
        setProjects(updatedProjects);
      } else {
        throw new Error("No repository data received. Showing fallback project data.");
      }
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      const errorMessage = error instanceof Error ? error.message : "Unable to fetch live project data from GitHub.";
      setError(errorMessage);
      setProjects(fallbackProjects);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRepoData();
  }, []);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projects;
    }
    return projects.filter(project => 
      selectedTags.some(tag => project.tags.includes(tag))
    );
  }, [projects, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <FolderOpenIcon size={16} />
            <span>Featured Work</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Pinned Projects
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            A showcase of my most notable open-source contributions and personal projects.
          </p>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-3"
          >
            <AlertCircleIcon className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-foreground">{error}</p>
            </div>
            <button
              onClick={fetchRepoData}
              disabled={isLoading}
              className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-destructive/20 hover:bg-destructive/30 text-foreground transition-colors disabled:opacity-50"
            >
              <RefreshCwIcon size={14} className={isLoading ? "animate-spin" : ""} />
              Retry
            </button>
            <button
              onClick={() => setError(null)}
              className="text-secondary hover:text-foreground transition-colors"
            >
              <XIcon size={18} />
            </button>
          </motion.div>
        )}

        {!isLoading && allTags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <span className="text-sm text-secondary font-medium">Filter:</span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                      : "bg-card/50 text-secondary border-border/50 hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {tag}
                </button>
              ))}
              {selectedTags.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm px-4 py-2 rounded-full bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/20 transition-all flex items-center gap-1"
                >
                  <XIcon size={14} />
                  Clear
                </button>
              )}
            </div>
            {selectedTags.length > 0 && (
              <p className="text-center text-sm text-secondary mt-5">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            )}
          </motion.div>
        )}

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2Icon className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-secondary">No projects found matching the selected filters.</p>
            <button onClick={clearFilters} className="mt-4 text-primary hover:underline">Clear all filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-start justify-between mb-4 relative">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors tracking-tight">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-primary transition-colors p-1 rounded-lg hover:bg-primary/10"
                        title="View Live Demo"
                      >
                        <GlobeIcon size={18} />
                      </a>
                    )}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary transition-colors p-1 rounded-lg hover:bg-primary/10"
                      title="View on GitHub"
                    >
                      <ExternalLinkIcon size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-secondary mb-5 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary/90 border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 text-sm text-secondary pt-3 border-t border-border/50">
                  <div className="flex items-center gap-1.5">
                    <StarIcon size={15} className="text-yellow-400" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GitForkIcon size={15} />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};