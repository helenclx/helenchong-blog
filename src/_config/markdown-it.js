// markdown-it plugins
import markdownIt from "markdown-it";

// Enable exporting markdown-it library to another module
export let markdownLibrary;

export default function(eleventyConfig) {
    /* Markdown Overrides */
    markdownLibrary = markdownIt({
        html: true,
        linkify: true,
    });

    // Configure linkify
    markdownLibrary.linkify.set({ fuzzyLink: false });

    /* This is the part that tells 11ty to swap to our custom config */
    eleventyConfig.setLibrary("md", markdownLibrary);
}