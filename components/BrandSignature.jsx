export default function BrandSignature({ signoff }) {
  return (
    <p className="brand-signature">
      {signoff && (
        <>
          <span className="brand-signature-name">{signoff}</span>
          <br />
        </>
      )}
      Human-Led AI.
      <br />
      <em>Clear. Capable. Human.</em>
    </p>
  );
}
