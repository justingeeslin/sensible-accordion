window.sensible = typeof sensible !== "undefined" ? sensible : {};
sensible.classes = typeof sensible.classes !== "undefined" ? sensible.classes : {};

window.sensible.classes.Accordion = require('./js/sensibleAccordion.js');

module.exports = window.sensible.classes.Accordion;
