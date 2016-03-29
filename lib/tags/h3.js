/**
 * @file rule for the <h3> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'h3',

    getCategories: function (element) {
        return ['flow content', 'heading content', 'palpable content'];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - flow content
        return result;
    },

    validateContent: function (element, result) {
        var children = element.children;

        // is phrasing content
        result = result.concat(util.validateCategory('phrasing content', children));

        return result;
    }
};