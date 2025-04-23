# MD Composer Extras

This Discourse theme component adds formatting options to your Discourse composer.

* underline
* strikethrough
* superscript
* subscript
* center
* align left
* align right
* justify
* float left
* columns
* Highlighter

These additions are responsive for desktops and phones, but not for horizon orientation or tablets. These additions have taken into consideration [Slick](https://github.com/discourse/Discourse-Slick-image-gallery), [Tiles](https://github.com/discourse/Discourse-Tiles-image-gallery), and [Events](https://github.com/angusmcleod/discourse-events) when determining what should be placed on the composer bar or in the composer pop out menu.

There is currently no implemented option for disabling particular buttons, but this can be done through CSS.

## Columns and Floats

When using columns and floats, note that the text will autobreak once an appropriate amount of content has been placed in the second column or to the side of the float.

Columns have a CSS border to for ease of viewing.

A column is broken by placing `[/wrap]` at the end of the first column's content.

The CSS for columns and floats is disabled on mobile. By default on mobile columns and float will appear as single column content. The missing CSS can be added in again manually.

**Column Example**

Place the following in your editor to see how columns work.

```
Test

[wrap="columns"]
1
2
3
[/wrap]
1
2
3

Test
```

## Questions

For more informations, see: 

- English : https://meta.discourse.org/t/md-composer-extras/118912
- Français : https://www.mon-discourse.fr/themes/md-composer-extras/

## Credits

Wrap support by thw26: https://github.com/thw26

<br>

I took some parts of the Iconified Header Links and Slick Image Gallery theme components made by Johani : 

https://meta.discourse.org/t/iconified-header-links/86307 (adding fa5 icons in the theme component)
https://meta.discourse.org/t/slick-image-gallery/81952 (manager the translations inside the theme component)
