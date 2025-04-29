import { DateTime } from "luxon";
import slug from 'limax';

export default function(eleventyConfig) {
    // Filter: Format dates
    eleventyConfig.addFilter("formatDate", (date, pageLang="en") => {
        const dateFormat = pageLang === "zh" ? "yyyy 年 L 月 d 日" : "d LLLL yyyy";
        if (typeof date === "object") {
            return DateTime.fromJSDate(date).setLocale(pageLang).toFormat(dateFormat);
        }
        return DateTime.fromISO(date, { setZone: true }).setLocale(pageLang).toFormat(dateFormat);
    });

    // Filter: URL slug generation with more language support than slugify
    eleventyConfig.addFilter("slugStr", (str) => slug(str));
}
