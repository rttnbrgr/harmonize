import { buildEffectStyleBlock } from "./buildEffectStyleBlock";
import { addHeaderToFrame, buildStyleFrames } from "./frameHelpers";
import { boostrapStyleDocFrame } from "./styleDocFrame";

async function generateLocalEffectStylesDoc(mainFrame: FrameNode) {
  await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

  // Get effect styles
  const localEffectStyles = figma.getLocalEffectStyles();

  // Setup frame
  const effectStylesMasterFrame = boostrapStyleDocFrame("EffectStylesFrame");

  // Add header
  await addHeaderToFrame("Effect Styles", effectStylesMasterFrame);

  // Build the style frames and append them to the master artboard
  await buildStyleFrames<EffectStyle>(localEffectStyles, effectStylesMasterFrame, buildEffectStyleBlock, {
    x: 64 + 16,
    y: null,
  });

  // Add style frame to main frame
  mainFrame.appendChild(effectStylesMasterFrame);
}

export default generateLocalEffectStylesDoc;