'use strict';

/**
 * global-sections router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-sections.global-sections');
