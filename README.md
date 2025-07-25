<!-- PROJECT LOGO -->
<br />
<div align="center">
        <img src="dist/images/logo.jpg" alt="Logo" width="177" height="78" style="border-radius: 20px;">

<h1 align="center">Stooge CSS</h1>
   <p align="center">A utility-based CSS framework for fast development
        <br />
        <br />
        <a href="https://chrisjwaddell.github.io/Stooge-CSS/index.html"><strong>View Stooge CSS Documentation »</strong></a>
    </p>
</div>


Stooge CSS is a utility-based CSS framework with intuitive, consistent CSS class names making it very easy to use. Write your CSS in HTML abbreviated for super fast development.

Stooge CSS has components, responsiveness and an easy to use color system. So easy and so powerful.

Margin and padding are easier to understand eg `pl-35` is padding-left: 3.5rem;. You can add buttons with any font colour, background, border, shadows or with hover effects all in one line of code. You can add any button you want with any colour or size, and it takes 20 seconds.


## How Stooge CSS works
There are two parts to the CSS class name (three if you use units other than *rem*). The format is as follows:

`(property name abbreviation)-(value abbreviation)`

eg `wi-25` is  *width: 2.5rem* \
`bw-45` is *border-width: 4.5rem*

There are two characters representing a property so coding is fast.

### Property name
Each CSS property is referred to by it's first two characters. If it has two words, it's the initials of those first two words.
Note: There are exceptions to that if a two letter combination is taken.

Margin is `ma`, word-spacing is `ws`.


### Value
There are some common pre-defined classes eg
`mx-3` is defined as:
.mx-3 {
    margin-left: 3rem;
    margin-right: 3 rem;
}

`di-ib` is *display: inline-block;*


### Units
The default for units is *rem*. When not using *rem*, you specify the units:- *p* is percentage, *n* is negative, *vh* is vh\
`mw-50-p` is *max-width: 50%*\
`ma-1-n` is *margin: -1rem*\
`he-100-vh` is *height: 100vh*


### Responsiveness
Just add *-m1*, *-m2*, up to *-m5* to the class name.\
`wi-100-p-m1 wi-50-p-m3` would give you width of 100% and 50% for devices smaller than 1200px.


# How to get started

Add this to the &lt;head&gt; of your HTML file:\
`<link href="https://cdn.jsdelivr.net/gh/chrisjwaddell/Stooge-CSS@main/dist/stooge.min.css" rel="stylesheet">`\
`<link href="https://cdn.jsdelivr.net/gh/chrisjwaddell/Stooge-CSS@main/dist/stooge-responsive.min.css" rel="stylesheet">`\
`<link href="https://cdn.jsdelivr.net/gh/chrisjwaddell/Stooge-CSS@main/dist/stooge-colors.min.css" rel="stylesheet">`

## Table of Contents
- [Getting Started](https://chrisjwaddell.github.io/Stooge-CSS/)
- [Layout and Position](https://chrisjwaddell.github.io/Stooge-CSS/layout-and-position.html)
- [Spacing](https://chrisjwaddell.github.io/Stooge-CSS/spacing.html)
- [Visibility and Box-Model](https://chrisjwaddell.github.io/Stooge-CSS/visibility-and-box-model.html)
- [Text](https://chrisjwaddell.github.io/Stooge-CSS/text.html)
- [Components](https://chrisjwaddell.github.io/Stooge-CSS/components.html)
- [Animation](https://chrisjwaddell.github.io/Stooge-CSS/animation.html)
- [Responsive](https://chrisjwaddell.github.io/Stooge-CSS/responsive.html)
- [Colors](https://chrisjwaddell.github.io/Stooge-CSS/colors.html)
- [Purge CSS](https://chrisjwaddell.github.io/Stooge-CSS/purgecss.html)


# Documentation
[See Documentation website](https://chrisjwaddell.github.io/Stooge-CSS/)
OR
[See Github Documentation](https://github.com/chrisjwaddell/Stooge-CSS/tree/main/docs)


# Contributions
If you'd like to help us out with the project, we welcome contributions of all types! Check out our [CONTRIBUTING.md](https://github.com/chrisjwaddell/Stooge-CSS/blob/main/CONTRIBUTIONS.md) for more details on how you can help make Stooge CSS amazing!


# License
Code and documentation copyright 2022 by Chris Waddell.
Licensed under the [MIT License](https://github.com/chrisjwaddell/Stooge-CSS/blob/main/LICENSE).

