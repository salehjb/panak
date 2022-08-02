/** Flexbox styles */

export const flexBetween = {
  display: "flex",
  justifyContent: "space-between",
};

export const flexBetweenCenter = {
  display: "flex",
  justifyContent: { xs: "center", md: "space-between" },
  alignItems: "center",
};

export const flexAlignCenter = {
  display: "flex",
  alignItems: "center",
};

export const flexJustifyCenter = { display: "flex", justifyContent: "center" };

export const flexEnd = {
  display: "flex",
  justifyContent: "flex-end",
};

export const flexStart = {
  display: "flex",
  justifyContent: "flex-start",
};

export const flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const fullWidthFlex = {
  display: "flex",
  width: "100%",
};

export const drFlex = {
  display: "flex",
  flexDirection: "row",
};

export const dcFlex = {
  display: "flex",
  flexDirection: "column",
};

export const fixedBottom = {
  position: "absolute",
  bottom: 100,
  width: "100%",
};

export const displayOnDesktop = { display: { xs: "none", md: "block" } };
