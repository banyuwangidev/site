const menuItems = ["Blog", "Events", "Contributors", "About"].map((item) => ({
  title: item,
  path: item.toLowerCase().replace(/\s/gi, "-"),
}))

export default menuItems
