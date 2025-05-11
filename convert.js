function svgToPng(svg, png) {
  const img = new Image();
  img.onload = function() {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const pngData = canvas.toDataURL("image/png");
    // Save the PNG data to a file (needs server-side handling)
    console.log(`Converted ${svg} to ${png}`);
  };
  img.src = svg;
}

// Convert all SVGs to PNGs
svgToPng("img/BG.svg", "img/BG.png");
svgToPng("img/ground.svg", "img/ground.png");
svgToPng("img/toppipe.svg", "img/toppipe.png");
svgToPng("img/botpipe.svg", "img/botpipe.png");
svgToPng("img/getready.svg", "img/getready.png");
svgToPng("img/go.svg", "img/go.png");
svgToPng("img/tap/t0.svg", "img/tap/t0.png");
svgToPng("img/tap/t1.svg", "img/tap/t1.png");
