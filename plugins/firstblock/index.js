// var registerBlockType =  wp.blocks.registerBlockType;
const { registerBlockType } =  wp.blocks;
const { createElement } = wp.element;


registerBlockType("blocks-course/firstblock", {
  edit: function() {
    return createElement("p", {
      className: "class"
    }, "Edit");
  },
  save: function() {
    return createElement("p", null, "Save");
  },
})