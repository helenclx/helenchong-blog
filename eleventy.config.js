// Plugins
import { EleventyI18nPlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "en",
        errorMode: "allow-fallback"
    });

    // Passthrough File Copy
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src"
        }
    };
};