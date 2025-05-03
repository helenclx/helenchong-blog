export default function (eleventyConfig) {
    // Shortcode: <cite> tag
    eleventyConfig.addShortcode("cite", (str) => `<cite>${str}</cite>`);

    // Paired shortcode: <figure> element
    eleventyConfig.addPairedShortcode("imgFigure", (caption, imgUrl, alt, className="", imgAttrs="", id="", lazyLoad = true) => {
        const imgClass = className ? ` class="${className}"` : '';
        const imgId = id ? ` id="${id}"` : '';
        const lazyLoading = lazyLoad ? ' loading="lazy"' : '';
        return `<figure${imgId}${imgClass}>
            <img src="${imgUrl}" alt="${alt}"${imgAttrs}${lazyLoading}>
            <figcaption>${caption}</figcaption>
        </figure>
        `;
    });
}
