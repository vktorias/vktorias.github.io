import React, { useState, useEffect } from 'react';
import Loading from '../assets/Loading.js';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/vktorias/repos'
        );
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos: ', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h2>Mina GitHub Repositories</h2>
      {loading ? (
        <Loading />
      ) : (
        <ul className="repositories">
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GitHubRepos;
