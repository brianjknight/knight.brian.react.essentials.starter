export default function Section({ title, children, ...props }) {
  // 'id="examples"' additional attributes like id are merged into props
  // then spread into <section> element
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
