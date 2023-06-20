
export default function Button({
  children,
  type,
  disabled,
  width,
  onClick
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        width,
        padding: 10,
        border: "none",
        outline: "none",
        borderRadius: 4,
        background: "#00009c",
        color: "white",
        cursor: "pointer"
      }}
    >{children}</button>
  );
}