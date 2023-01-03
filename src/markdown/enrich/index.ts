import * as R from "ramda";
import customEmojis from "./customEmojis";

import mentions from "./mentions";

const enrich = R.pipe(mentions, customEmojis);

export default enrich;
