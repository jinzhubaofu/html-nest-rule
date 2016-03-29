/**
 * @file rule for the <del> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'del',

    getCategories: function (element) {
        return ['flow content', 'phrasing content'];
    },

    validateContext: function (element, result) {
        // IGNORE: context: is - phrasing content
        return result;
    },

    validateContent: function (element, result) {
        var children = element.children;

        // transparent
        var rule = element.parentElement && util.getRule(element.parentElement);
        if (rule) {
            result = rule.validateContent(element, result);
        }

        return result;
    }
};