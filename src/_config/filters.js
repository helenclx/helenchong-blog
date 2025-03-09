import { DateTime } from "luxon";
import slug from 'limax';

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
        return DateTime.fromISO(date, { setZone: true }).setLocale(pageLang).toFormat(dateFormat);
    });

    // Limit number of items displayed
    eleventyConfig.addFilter("itemLimit", (array, maximum) => {
        return array.slice(0, maximum);
    });

    // URL slug generation with more language support tha slugify
    eleventyConfig.addFilter("slug", (str) => {
        return slug(str);
    });
}