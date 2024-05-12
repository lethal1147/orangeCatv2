import "./loader.css";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
