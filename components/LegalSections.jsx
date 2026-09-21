export default function LegalSections({ sections }) {
  return sections.map((s) => (
    <div key={s.number}>
      <h3>{s.number}. <span dangerouslySetInnerHTML={{ __html: s.title }} /></h3>
      <div dangerouslySetInnerHTML={{ __html: s.html }} />
    </div>
  ));
}
