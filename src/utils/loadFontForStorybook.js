// Load the font and avoid re-loading it when components change
const fontLinkId = "storybook-font-link-tag"

export const loadFontForStorybook = () => {
  if (!document.getElementById(fontLinkId)) {
    const fontLink = document.createElement("link")

    fontLink.id = fontLinkId
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
    fontLink.rel = "stylesheet"

    document.head.appendChild(fontLink)
  }
}
