import './ArticleRow.css';

export default function ArticleRow({ article, titleColor = 'orange' }) {
  const dateStr = article.date
    ? new Date(article.date).toLocaleDateString('en-GB', { month: 'short', day: 'numeric', year: 'numeric' })
    : '';

  return (
    <div className="article-row">
      <div className="article-row__left">
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`article-row__title article-row__title--${titleColor}`}
        >
          {article.title}
        </a>
        <p className="article-row__subtitle">{article.description}</p>
      </div>
      <div className="article-row__right">
        <span className="article-row__date">{dateStr}</span>
        <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-row__read">
          Read →
        </a>
      </div>
    </div>
  );
}
