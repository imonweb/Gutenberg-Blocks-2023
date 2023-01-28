<!-- Learn how to maintain this file at https://github.com/WordPress/gutenberg/tree/HEAD/packages#maintaining-changelogs. -->

## Unreleased

## 6.2.0 (2023-01-11)

## 6.1.0 (2023-01-02)

## 6.0.0 (2022-12-14)

### Breaking Changes

-   Updated dependencies to require React 18 ([45235](https://github.com/WordPress/gutenberg/pull/45235))

## 5.6.0 (2022-11-16)

## 5.5.0 (2022-11-02)

## 5.4.0 (2022-10-19)

## 5.3.0 (2022-10-05)

### New features

-   Added Autocomplete Component e2e test suite. [#42905](https://github.com/WordPress/gutenberg/pull/42905).

## 5.2.0 (2022-09-21)

## 5.0.0 (2022-08-24)

### Breaking Change

-   Increase the minimum Node.js version to 14 ([#43141](https://github.com/WordPress/gutenberg/pull/43141)).

## 4.0.0 (2022-04-08)

### Breaking Changes

-   There's currently an ongoing [project](https://github.com/WordPress/gutenberg/issues/38851) to migrate E2E tests to Playwright instead. This package is deprecated and will only accept bug fixes until fully migrated.

## 3.0.0 (2022-01-27)

### Breaking Changes

-   The peer `puppeteer` dependency has been replaced with `puppeteer-core` requiring version `>=11` (see [Breaking Changes](https://github.com/puppeteer/puppeteer/releases/tag/v11.0.0), [#36040](https://github.com/WordPress/gutenberg/pull/36040)).
-   The peer `jest` dependency has been updated from requiring `>=26` to requiring `>=27` (see [Breaking Changes](https://jestjs.io/blog/2021/05/25/jest-27), [#33287](https://github.com/WordPress/gutenberg/pull/33287)).

## 2.5.0 (2021-09-09)

### New Features

-   Emulate `prefers-reduced-motion: reduce` [#34132](https://github.com/WordPress/gutenberg/pull/34132).

## 2.4.0 (2021-07-29)

### New Features

-   Bail out tests if a prior snapshot failed. Fixed a bug which failing snapshots won't trigger screenshots [#33448](https://github.com/WordPress/gutenberg/pull/33448).

## 2.0.0 (2021-01-21)

### Breaking Changes

-   Increase the minimum Node.js version to 12 ([#27934](https://github.com/WordPress/gutenberg/pull/27934)).

## 1.9.1 (2020-01-01)

## 1.9.0 (2019-12-19)

### New Features

-   Added `THROTTLE_CPU` and `DOWNLOAD_THROUGHPUT` environment variable configuration options ([#18770](https://github.com/WordPress/gutenberg/pull/18770)).

## 1.8.0 (2019-11-15)

## 1.7.0 (2019-09-16)

## 1.6.0 (2019-09-03)

## 1.2.0 (2019-05-21)

### New features

-   Added Axe (the Accessibility Engine) API integration with e2e tests suite.

## 1.0.0 (2019-03-06)

-   Initial release.