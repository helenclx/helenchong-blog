import { DateTime } from "luxon";
import slug from 'limax';

// Filter: Format dates
const formatDate = (date, pageLang="en") => {
    const dateFormat = pageLang === "zh" ? "yyyy 年 L 月 d 日" : "d LLLL yyyy";
    if (typeof date === "object") {
        return DateTime.fromJSDate(date).setLocale(pageLang).toFormat(dateFormat);
    }
    return DateTime.fromISO(date, { setZone: true }).setLocale(pageLang).toFormat(dateFormat);
}

// Filter: URL slug generation with more language support than slugify
const slugStr = (str) => slug(str);

export default  {
    formatDate,
    slugStr,
}
