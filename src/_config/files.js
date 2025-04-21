export default function (eleventyConfig) {
    // Passthrough File Copy
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addPassthroughCopy({
        "./src/assets/favicon/favicon.ico": "/favicon.ico",
        "./src/assets/favicon/apple-touch-icon.png": "/apple-touch-icon.png"
    });
}
