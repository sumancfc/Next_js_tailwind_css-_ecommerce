import PanelData from "./PanelData"

export default function PanelMenu({ data, style, openMblNav, closeNav }) {
  return (
    <PanelData title="Menu" data={data} style={style} openMblNav={openMblNav} closeNav={closeNav} />
  )
}
