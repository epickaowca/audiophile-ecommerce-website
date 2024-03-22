export const toggleBodyOverflow = (
  overflow: "hidden" | "visible",
  onlyMobile?: boolean
) => {
  const className = onlyMobile
    ? "overflow-y-hidden-mobile"
    : "overflow-y-hidden";
  if (overflow === "hidden") {
    document.body.classList.add(className);
  } else {
    document.body.classList.remove(className);
  }
};
