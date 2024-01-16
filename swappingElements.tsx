const tabs = [
  { name: "Red", color: "#f00" },
  { name: "Purple", color: "#b1f" },
  { name: "Orange", color: "#f90" },
  { name: "Green", color: "#0c0" },
]

export default function CC_34_Swapping_elements(props) {
  const [selected, setSelected] = useState(0)
  const [formerColor, setFormerColor] = useState(tabs[0].color)

  return (
    <div
      style={{
        width: 400,
        height: 400,
        ...props.style,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
      }}
    >
      <div style={containerStyle}>
        {tabs.map(({ name, color }, i) => (
          <motion.div
            style={tabStyle}
            key={i}
            initial={{
              color: i === selected ? "#fff" : "#222",
            }}
            animate={{
              color: i === selected ? "#fff" : "#222",
            }}
            transition={{ duration }}
            onTap={() => {
              setFormerColor(tabs[selected].color)
              setSelected(i)
            }}
          >
            <span style={{ position: "relative", zIndex: 1 }}>{name}</span>
            {i === selected && (
              <motion.div
                style={selectionStyle}
                layoutId="selected"
                initial={{ backgroundColor: formerColor }}
                animate={{ backgroundColor: color }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const containerStyle: React.CSSProperties = {
  position: "relative",
  borderRadius: 21,
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  padding: 6,
  display: "flex",
  alignContent: "flex-start",
  alignItems: "start",
  justifyContent: "start",
}

const tabStyle: React.CSSProperties = {
  height: 30,
  position: "relative",
  padding: "3px 15px",
  margin: 0,
  fontFamily: "sans-serif",
  fontSize: 20,
  fontWeight: 700,
  color: "#222",
  cursor: "pointer",
}

const selectionStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  position: "absolute",
  borderRadius: 15,
  top: 0,
  left: 0,
}
