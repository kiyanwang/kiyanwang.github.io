import NavBar from '../components/NavBar';
import ArticleRow from '../components/ArticleRow';
import articles from '../data/articles.json';
import './Writing.css';

export default function Writing() {
  return (
    <div>
      <NavBar />
      <div className="writing__header">
        <h1 className="writing__title">Writing</h1>
        <p className="writing__subtitle">
          Thoughts on software engineering, AI, teams, and the craft of building things.
          Published on <a href="https://virtualchaos.substack.com" target="_blank" rel="noopener noreferrer">Substack</a> and{' '}
          <a href="https://linkedin.com/in/nadeemshabir" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </div>
      <div className="writing__list">
        {articles.map((a) => (
          <ArticleRow key={a.link} article={a} titleColor="orange" />
        ))}
      </div>
      <div className="writing__footer">
        Auto-populated from{' '}
        <a href="https://virtualchaos.substack.com" target="_blank" rel="noopener noreferrer">
          virtualchaos.substack.com
        </a>{' '}
        RSS feed
      </div>
    </div>
  );
}
