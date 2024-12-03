import { k as defineEventHandler } from '../../../_/nitro.mjs';
import { i as imageEventHandler } from '../../../_/eventHandlers.mjs';
import 'lru-cache';
import 'devalue';
import 'node:http';
import 'node:https';
import 'vue';
import 'consola/core';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:path';
import 'nuxt-site-config/urls';
import 'ipx';
import '@unhead/ssr';
import 'unhead';

const image = defineEventHandler(imageEventHandler);

export { image as default };
//# sourceMappingURL=image.mjs.map
