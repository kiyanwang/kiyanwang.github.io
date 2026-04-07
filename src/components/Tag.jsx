import './Tag.css';

export default function Tag({ label, variant = 'orange', onClick }) {
  const classes = [
    'tag',
    `tag--${variant}`,
    onClick ? 'tag--clickable' : '',
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} onClick={onClick} role={onClick ? 'button' : undefined}>
      {label}
    </span>
  );
}
