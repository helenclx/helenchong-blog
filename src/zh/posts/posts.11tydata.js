export default {
    layout: "layouts/post",
    tags: ["posts_zh"],
    eleventyComputed: {
        permalink: "/{{ locale }}/posts/{{ page.fileSlug }}/"
    }
}