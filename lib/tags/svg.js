/**
 * @file rule for the <svg> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'svg',

    getCategories: function (element) {
        return ['embedded content', 'phrasing content', 'flow content'];
    },

    validateContext: function (element, result) {
        return result;
    },

    validateContent: function (element, result) {
        return result;
    }
};