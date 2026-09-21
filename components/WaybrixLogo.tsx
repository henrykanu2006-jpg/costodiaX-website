export default function WaybrixLogo({ size = 40 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,#6366F1,#4F46E5)",
      }}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="white">
        <path d="M1 2L1 6L8 12L1 18L1 22L11 13L11 11Z" />
        <path d="M13 2L13 6L20 12L13 18L13 22L23 13L23 11Z" />
      </svg>
    </div>
  );
}
