/// <reference path="../../../typings/tsd.d.ts" />

"use strict";

import * as mongoose from 'mongoose';

var _<%= nameLowerCase %>Schema =
{
  somethingSomething: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
}

export default mongoose.Schema(<%= nameLowerCase %>Schema);
