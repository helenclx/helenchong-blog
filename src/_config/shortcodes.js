import { markdownLibrary } from "./markdown-it.js";

export default function(eleventyConfig) {
    // Shortcode: <cite> tag
    eleventyConfig.addShortcode('cite', (str) => `<cite>${str}</cite>`);
}
