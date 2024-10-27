export default {
    layout: "layouts/post",
    tags: ["posts", "posts_en"],
    eleventyComputed: {
        permalink: "/{{ locale }}/posts/{{ page.fileSlug }}/"
    }
}