export const Header = (props) => {
  return (
    <div
      style={{
        color: "#ffffff",
        backgroundColor: "#126bbf",
        fontFamily: ["Raleway", "sans-serif"],
        fontSize: "62px",
        fontWeight: "800",
        lineHeight: "72px",
        margin: "0 0 24px",
        textAlign: "center",
        textTransform: "uppercase",
      }}
    >
      {props.title}
    </div>
  );
};
