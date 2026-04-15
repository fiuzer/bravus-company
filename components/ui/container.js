export function Container({ children, narrow = false, className = "" }) {
  const baseClass = narrow ? "container-narrow" : "container";
  const classes = className ? `${baseClass} ${className}` : baseClass;

  return <div className={classes}>{children}</div>;
}
