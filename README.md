Essent10
========

Just a minimalistic (kinda) theme for Pelican
---------------------------------------------

Esset10 (pronounced `Essentio`, because I'm weird like that) is a theme that came out while working on my blog, it has lots of customization and doesn't use a single JavaScript statement for its operation.

It is responsive and supports the new `prefers-color-scheme` CSS directive, for us dark-mode lords.

Plugin Compatibility
--------------------

This plugin is compatible with (as far as I know):

- [Pelican SEO](https://github.com/pelican-plugins/seo)
- [i18n_subsites](https://github.com/getpelican/pelican-plugins/tree/master/i18n_subsites)
- [Readtime](https://github.com/JenkinsDev/pelican-readtime)
- [Neighbors](https://github.com/pelican-plugins/neighbors)
- [Sitemap](https://github.com/pelican-plugins/sitemap)

Options
-------

| Name                  | Description                                                                                                                          | Default   |
| :--:                  | :---------:                                                                                                                          | :-------: |
| ENABLE_BREADCRUMBS    | Enables breadcrumb generation and visualization                                                                                      | `True`    |
| BREADCRUMBS_ON_MOBILE | When set to `false` it will hide breadcrumbs in "mobile mode"                                                                        | `False`   |
| THEME_COLOR           | Set a color so that Firefox OS and Chrome will adopt it                                                                              | `#1C1C1C` |
| LOGO_IMAGE            | When set, it will replace the website title with and image (example: `logo.png`), use a filename relative to the root of the website | `None`    |
| SITESUBTITLE          | If set, will write a subtitle on the website header                                                                                  | `None`    |
| SOCIAL_WIDGET_NAME    | Change the name of the "Social" section in the footer                                                                                | `Social`  |
| LINKS_WIDGET_NAME     | Change the name of the "blogroll" section in the footer                                                                              | `Links`   |
| FEED_WIDGET_NAME      | Change the name of the "feeds" section in the footer                                                                                 | `Feed`    |
| PAGES_AUTO_TITLE      | When `false` won't show an `h1` title for pages, for maximum customization                                                           | `False`   |
| SITEDESC              | Site description (for `index.html`'s `<meta>` description)                                                                           | `None`    |
| SEARCHBOX_ENABLED     | Show the search box                                                                                                                  | `False`   |
| COPYRIGHT             | Show a copyright statement at the bottom of the page                                                                                 | `False`   |
| COPYRIGHT_YEAR        | Year of copyright validity                                                                                                           | `None`    |
| COPYRIGHT_NAME        | Name of the copyright holder                                                                                                         | `None`    |

Social Sharing
--------------

The theme supports a non-intrusive, non-tracking, javascript-less set of social sharing buttons implemented in pure HTML.

| Name                       | Description                                       | Default    |
| :------------------------: | :-----------------------------------------------: | :--------: |
| SOCIAL_SHARING_ON_ARTICLES | Shows a "Social Sharing" box at the end of a post | `False`    |
| SOCIAL_SHARING_ON_PAGES    | Shows a "Social Sharing" box at the end of a page | `False`    |
| SOCIAL_SHARING_BLANK       | Opens the social sharing on a new tab             | `True`     |
| TWITTER_SHARING_ENABLED    | Shows a "Share on Twitter" button                 | `True`     |
| FACEBOOK_SHARING_ENABLED  | Shows a "Share on Facebook" button                | `True`     |
| BUFFER_SHARING_ENABLED     | Shows a "Share on Buffer" button                  | `False`    |
| LINKEDIN_SHARING_ENABLED   | Shows a "Share on LinkedIn" button                | `False`    |
| PINTEREST_SHARING_ENABLED  | Shows a "Share on Pinterest" button               | `True`     |
| REDDIT_SHARING_ENABLED     | Shows a "Share on Reddit" button                  | `True`     |
| HACKERNEWS_SHARING_ENABLED | Shows a "Share on Hacker News" button             | `False`    |
| EMAIL_SHARING_ENABLED      | Shows a "Share Via Email" button                  | `False`    |

Search Box
----------

The search box has some options of its own which may need some explaining:

- `SEARCH_ENGINE_ADDR` is the address of the "search page" (for instance: `https://duckduckgo.com`)
- `TEXT_QUERY_NAME` defines the `name` of the searchbox input field, which will be sent to the search engine (for instance `q`)
- `SITE_LIMIT_VAR_NAME` defines the field that will be sent to the search engine to limit the search to our website (for instance `sites`)

If we use the settings in the above example, we will obtain the request `https://duckduckgo.com/?q=<our search>&sites=<our website>`.

I don't know how many search engines use this "get-based" approach, but I wanted to leave it configurable.

Tips
----

You may want to use `STATIC_PATHS` and `EXTRA_PATH_METADATA` to set some custom static files, without editing the theme directly (favicons, logos, etc...).
