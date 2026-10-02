"use client";

import { motion } from "framer-motion";
import { StarIcon, GitCommitIcon, GitPullRequestIcon, AlertCircleIcon, FolderGit2Icon, ActivityIcon, TrendingUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface GitHubStats {
  totalCommits: number;
  publicRepos: number;
  followers: number;
  following: number;
}

export const AboutSection = () => {
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Static-site friendly: query the public GitHub API directly
        // (no server-side /api proxy — this repo builds with output:"export").
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const dateQuery = oneYearAgo.toISOString().split("T")[0];

        const [commitsResponse, userResponse] = await Promise.all([
          fetch(
            `https://api.github.com/search/commits?q=author:girishlade111+author-date:>=${dateQuery}&per_page=1`,
            { headers: { Accept: "application/vnd.github.cloak-preview+json" } }
          ),
          fetch("https://api.github.com/users/girishlade111", {
            headers: { Accept: "application/vnd.github.v3+json" },
          }),
        ]);

        if (commitsResponse.ok && userResponse.ok) {
          const commitsData = await commitsResponse.json();
          const userData = await userResponse.json();
          setGithubStats({
            totalCommits: commitsData.total_count || 0,
            publicRepos: userData.public_repos || 0,
            followers: userData.followers || 0,
            following: userData.following || 0,
          });
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K+`;
    }
    return num.toString();
  };

  const stats = [
    { icon: StarIcon, label: "Stars Earned", value: "588", color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { 
      icon: GitCommitIcon, 
      label: "Total Commits (Last Year)", 
      value: isLoading ? "..." : (githubStats ? formatNumber(githubStats.totalCommits) : "3.8K+"), 
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    { icon: GitPullRequestIcon, label: "Pull Requests", value: "16", color: "text-violet-400", bg: "bg-violet-400/10" },
    { icon: AlertCircleIcon, label: "Issues", value: "42", color: "text-red-400", bg: "bg-red-400/10" },
    { 
      icon: FolderGit2Icon, 
      label: "Repositories", 
      value: isLoading ? "..." : (githubStats ? githubStats.publicRepos.toString() : "614"), 
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    { icon: ActivityIcon, label: "Contributions", value: "3,183+", color: "text-primary", bg: "bg-primary/10" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
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
            <TrendingUpIcon size={16} />
            <span>About Me</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Who Am I
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            I'm <span className="text-primary font-semibold">Girish Balaso Lade</span> — a developer, designer, and AI enthusiast 
            passionate about creating open-source tools and modern web experiences. 
            I love mixing creativity with code to bring design to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3.5 rounded-xl ${stat.bg}`}>
                  <stat.icon size={24} className={stat.color} />
                </div>
                <div className="flex-1">
                  <p className="text-3xl font-bold mb-1 tracking-tight">{stat.value}</p>
                  <p className="text-sm text-secondary">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};