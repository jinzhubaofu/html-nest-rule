/**
 * @file rule for the <th> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'th',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element, result) {
        // context: raw - as a child of a tr element
        if (
            element.parentElement
            && util.isNotTag('tr', element.parentElement)
        ) {
            result.push({
                expect: 'as a child of a tr element',
                got: element.parentElement.tagName.toLowerCase(),
                target: element
            });
        }

        return result;
    },

    validateContent: function (element, result) {
        var children = element.children;

        // content: raw - flow content, but with no header, footer, sectioning content, or heading content descendants

        // flow content
        result = result.concat(util.validateCategory('flow content', children));

        // but with no header, footer, sectioning content, or heading content descendants
        util.walkDescendants(element, function (descendant) {
            // no header, footer element descendants
            if (util.isTag('header|footer', descendant)) {
                result.push({
                    expect: 'with no header, footer element descendants',
                    got: util.nodeInfo(descendant),
                    target: descendant
                });
            }

            // no sectioning content or heading content descendants
            var categories = util.getCategories(descendant);
            if (
                categories.indexOf('heading content') >= 0
                || categories.indexOf('sectioning content') >= 0
            ) {
                result.push({
                    expect: 'with no sectioning content or heading content descendants',
                    got: util.nodeCategoriesInfo(descendant),
                    target: descendant
                });
            }
        });

        return result;
    }
};