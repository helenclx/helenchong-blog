// markdown-it plugins
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import markdownItBracketedSpans from "markdown-it-bracketed-spans";

// Configure URL slug generation
import slug from 'limax';

// Enable exporting markdown-it library to another module
export let markdownLibrary;

export default function(eleventyConfig) {
    // Configure markdown-it-anchor plugins
    const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
        class: "heading-anchor",
        assistiveText: title => `Permalink to section '${title}'`,
        visuallyHiddenClass: 'visually-hidden',
    });
    const markdownItAnchorOptions = {
        level: [2, 3, 4, 5],
        slugify: (str) => slug(str),
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
        .set({ fuzzyLink: false })
        .use(markdownItAnchor, markdownItAnchorOptions)
        .use(markdownItAttrs)
        .use(markdownItBracketedSpans);

    /* This is the part that tells 11ty to swap to our custom config */
    eleventyConfig.setLibrary("md", markdownLibrary);
}
