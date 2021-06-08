import PanelData from "./PanelData"

export default function PanelCategory({ data, style, openMblNav, closeNav }) {
  return (
    <PanelData
      title="Shop By Category"
      data={data}
      style={style}
      openMblNav={openMblNav}
      closeNav={closeNav}
    />
  )
}
