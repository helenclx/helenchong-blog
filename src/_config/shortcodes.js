import { markdownLibrary } from "./markdown-it.js";

export default function(eleventyConfig) {
    // Shortcode: <cite> tag
    eleventyConfig.addShortcode('cite', (str) => `<cite>${str}</cite>`);

    // Shortcode: Image figure and figcaption
    eleventyConfig.addPairedShortcode('imgFigure', (
        caption, img, alt=caption, className, enableLazyLoading=true
    ) => {
        const classMarkup = className ? ` class="${className}"` : "";
        const figcaption = markdownLibrary.renderInline(caption);
        return `<figure${classMarkup}>
            <img src="${img}" alt="${alt}"${enableLazyLoading ? ' loading="lazy"' : ''}>
            <figcaption>${figcaption}</figcaption>
        </figure>`;
    });
}