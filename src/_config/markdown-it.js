// markdown-it plugins
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

// Configure slug filter
import slugify from "slugify";

// Enable exporting markdown-it library to another module
export let markdownLibrary;

export default function(eleventyConfig) {
    // Configure slug filter
    eleventyConfig.addFilter("slug", (str) => {
        if (!str) {
            return;
        }

        return slugify(str, {
            lower: true,
            remove: /["]/g,
        });
    });

    // Configure markdown-it-anchor plugins
    eleventyConfig.setLibrary('md', markdownIt().use(markdownItAnchor))
    const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
        class: "heading-anchor",
        symbol: "<span hidden>#</span>",
        style: "aria-labelledby",
    });
    const markdownItAnchorOptions = {
        level: [2, 3, 4, 5],
        slugify: (str) =>
            slugify(str, {
                lower: true,
                strict: true,
                remove: /["]/g,
            }),
        tabIndex: false,
        permalink(slug, opts, state, idx) {
            state.tokens.splice(idx, 0,
                Object.assign(new state.Token("div_open", "div", 1), {
                    // Add class "header-wrapper [h1 or h2 or h3]"
                    attrs: [["class", `heading-wrapper ${state.tokens[idx].tag}`]],
                    block: true,
                })
            );

            state.tokens.splice(idx + 4, 0,
                Object.assign(new state.Token("div_close", "div", -1), {
                    block: true,
                })
            );

            linkAfterHeader(slug, opts, state, idx + 1);
        },
    };

    /* Markdown Overrides */
    markdownLibrary = markdownIt({
        html: true,
        linkify: true,
    })
        .use(markdownItAnchor, markdownItAnchorOptions);

    // Configure linkify
    markdownLibrary.linkify.set({ fuzzyLink: false });

    /* This is the part that tells 11ty to swap to our custom config */
    eleventyConfig.setLibrary("md", markdownLibrary);
}