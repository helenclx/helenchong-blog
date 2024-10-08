import { DateTime } from "luxon";

export default function(eleventyConfig) {
    // Format dates
    eleventyConfig.addFilter("formatDate", (date, pageLang="en") => {
        const dateFormat = pageLang === "zh" ? "yyyy 年 L 月 d 日" : "d LLLL yyyy";
        if (typeof date === "object") {
            return DateTime.fromJSDate(date).setLocale(pageLang).toFormat(dateFormat);
        }
        return DateTime.fromISO(date, { setZone: true }).toFormat(dateFormat);
    });

    // Limit number of items displayed
    eleventyConfig.addFilter("itemLimit", function(array, itemLimit) {
        return array.slice(0, itemLimit);
    });

    // Filter tag list
    eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "posts", "posts_en", "posts_zh"].indexOf(tag) === -1);
	});
}