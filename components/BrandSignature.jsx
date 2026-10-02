export default function BrandSignature({ signoff }) {
  return (
    <p className="brand-signature">
      {signoff && (
        <>
          {signoff}
          <br />
        </>
      )}
      Human-Led AI.
      <br />
      <em>Clear. Capable. Human.</em>
    </p>
  );
}
