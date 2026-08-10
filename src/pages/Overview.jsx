import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KYE_MARKS = [
  { size: 28, weight: 900, opacity: 0.95 },
  { size: 22, weight: 800, opacity: 0.58 },
  { size: 30, weight: 900, opacity: 0.82 },
  { size: 20, weight: 700, opacity: 0.5 },
  { size: 26, weight: 900, opacity: 0.72 },
  { size: 22, weight: 800, opacity: 0.62 },
  { size: 30, weight: 900, opacity: 0.86 },
  { size: 24, weight: 800, opacity: 0.68 },
];

const LoaderTextItem = ({ size, weight, opacity, index, total }) => {
  const angle = (index / total) * 360;

  return (
    <span
      className="kye-loader-mark"
      style={{
        "--angle": `${angle}deg`,
        "--counter-angle": `${-angle}deg`,
        "--font-size": `${size}px`,
        "--font-weight": weight,
        "--opacity": opacity,
        "--delay": `${index * 0.14}s`,
      }}
    >
      UNMADE
    </span>
  );
};

// --- Main Overview Component ---
const Overview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => navigate("/home"), 3000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden theme-bg theme-text">
      {/* Kye Loader */}
      <div className="kye-loader-ring" aria-label="Loading UNMADES">
        {KYE_MARKS.map((mark, index) => (
          <LoaderTextItem
            key={index}
            index={index}
            total={KYE_MARKS.length}
            {...mark}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
