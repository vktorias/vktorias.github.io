//Importerar React från 'react' modulen
import React from 'react';
//Importerar GitHubRepos komponenten från './GitHubRepos' filen
import GitHubRepos from './GithubRepos';

//Skapar en Portfolio-funktion som är en React-komponent
function Portfolio() {
  // Returnerar JSX för Portfolio-komponenten
  return (
    <div className="content-container">
      {/* En sektion som innehåller GitHubRepos-komponenten */}
      <section className="portfolio-container">
        <div>
          <GitHubRepos />
        </div>
      </section>
    </div>
  );
}

//Exporterar Portfolio-komponenten som standard
export default Portfolio;
