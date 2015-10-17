// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var StatusIcon = require('grommet/components/icons/Status');
var IntlMixin = require('grommet/mixins/GrommetIntlMixin');
var IndexPropTypes = require('../utils/PropTypes');

var CLASS_ROOT = "index-attribute";

var Attribute = React.createClass({

  mixins: [IntlMixin],

  propTypes: {
    item: React.PropTypes.object.isRequired,
    attribute: IndexPropTypes.attribute.isRequired,
    className: React.PropTypes.string
  },

  render: function() {
    var attribute = this.props.attribute;

    var classes = [CLASS_ROOT];
    if (attribute.secondary) {
      classes.push(CLASS_ROOT + "--secondary");
    }
    if (attribute.size) {
      classes.push(CLASS_ROOT + "--" + attribute.size);
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }

    var item = this.props.item;
    var content = (<span>'?'</span>);
    var value;

    if (attribute.hasOwnProperty('render')) {

      content = attribute.render(item);

    } else {

      if (item.hasOwnProperty(attribute.name)) {
        value = item[attribute.name];
      } else if (item.attributes &&
        item.attributes.hasOwnProperty(attribute.name)) {
        value = item.attributes[attribute.name];
      }

      if ('status' === attribute.name) {
        content = (
          <StatusIcon className={classes.join(' ')}
            value={value.toLowerCase()} small={true} />
        );
      } else if (attribute.timestamp) {
        content = (
          <span className={classes.join(' ')}>
            {this.getGrommetFormattedDate(value)}
          </span>
        );
      } else {
        content = (
          <span className={classes.join(' ')}>{this.getGrommetIntlMessage(value)}</span>
        );
      }
    }

    return content;
  }

});

module.exports = Attribute;