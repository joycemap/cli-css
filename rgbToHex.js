
module.exports.rgbToHex = (r, g, b) =>
 {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
