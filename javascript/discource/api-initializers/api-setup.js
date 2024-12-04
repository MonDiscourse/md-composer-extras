import { apiInitializer } from "discourse/lib/api";
import loadScript from "discourse/lib/load-script";
import I18n from "I18n";

async function applyHighlight(element) {
  const highlights = element.querySelectorAll("mark");
  if (!highlights.length) {
    return;
  }
}

export default apiInitializer("0.11.1", (api) => {
  const { iconNode } = require("discourse-common/lib/icon-library");
  const currentLocale = I18n.currentLocale();

  // Localization setup
  I18n.translations[currentLocale].js.highlight_button_title = "Highlight Text";
  I18n.translations[currentLocale].js.composer.this = "this";

  // Highlight Button
  api.modifyClass("controller:composer", {
    pluginId: "highlight",
    actions: {
      highlightButton() {
        this.get("toolbarEvent").applySurround("<mark>", "</mark>");
      },
    },
  });

  // Toolbar Button Definitions
  api.onToolbarCreate((toolbar) => {
    const buttons = [
      {
        id: "composer_highlight_button",
        group: "extras",
        icon: "highlighter",
        shortcut: "H",
        preventFocus: true,
        trimLeading: true,
        title: "highlight_button_title",
        perform: (e) => e.applySurround("<mark>", "</mark>", "this"),
      },
      {
        id: "underline_button",
        group: "fontStyles",
        icon: "underline",
        perform: (e) => e.applySurround("[u]", "[/u]", "underline_text"),
      },
      {
        id: "strikethrough_button",
        group: "fontStyles",
        icon: "strikethrough",
        perform: (e) => e.applySurround("<s>", "</s>", "strikethrough_text"),
      },
      {
        id: "superscript_button",
        group: "fontStyles",
        icon: "superscript",
        perform: (e) => e.applySurround("<sup>", "</sup>", "superscript_text"),
      },
      {
        id: "subscript_button",
        group: "fontStyles",
        icon: "subscript",
        perform: (e) => e.applySurround("<sub>", "</sub>", "subscript_text"),
      },
      {
        id: "align_center_button",
        group: "extras",
        icon: "align-center",
        perform: (e) => e.applySurround('[wrap="center"]\n', "\n[/wrap]", "align_center_text"),
      },
      {
        id: "align_right_button",
        group: "extras",
        icon: "align-right",
        perform: (e) => e.applySurround('[wrap="right"]\n', "\n[/wrap]", "align_right_text"),
      },
      {
        id: "align_justify_button",
        group: "extras",
        icon: "align-justify",
        perform: (e) => e.applySurround('[wrap="justify"]\n', "\n[/wrap]", "align_justify_text"),
      },
    ];

    buttons.forEach((button) => toolbar.addButton(button));
  });

  // Add extra popup menu options
  api.addComposerToolbarPopupMenuOption({
    action: (toolbarEvent) =>
      toolbarEvent.applySurround('[wrap="floatl"]\n', "\n[/wrap]", "float_left_text"),
    icon: "indent",
    label: "float_left_button",
  });

  api.addComposerToolbarPopupMenuOption({
    action: (toolbarEvent) =>
      toolbarEvent.applySurround('[wrap="columns"]\n', "\n[/wrap]", "columns_text"),
    icon: "table-columns",
    label: "columns_button",
  });

  // Decorate cooked elements with highlight processing
  api.decorateCookedElement(
    async (elem, helper) => {
      const id = helper ? `post_${helper.getModel().id}` : "composer";
      applyHighlight(elem, id);
    },
    { id: "wrap-mark" }
  );
});
