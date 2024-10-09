import { DateTime } from "luxon";

export default function(eleventyConfig) {
    // Log into the console
    eleventyConfig.addFilter('consolelog', value => {
        console.log(value)
    })

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
}