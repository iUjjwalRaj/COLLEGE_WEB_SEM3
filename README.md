# COLLEGE_WEB_SEM3

This repository is a semester-wise learning archive documenting my practical
progress in web development through classroom exercises, experiments, and
small projects. It is an educational collection rather than one
production-ready application.

## Table of contents

- [Repository overview](#repository-overview)
- [Technologies and tools](#technologies-and-tools)
- [Directory guide](#directory-guide)
- [Concepts practiced](#concepts-practiced)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Learning roadmap](#learning-roadmap)
- [Code quality and project status](#code-quality-and-project-status)
- [Academic integrity and reuse](#academic-integrity-and-reuse)
- [Contributing](#contributing)
- [License](#license)
- [Author and repository links](#author-and-repository-links)
- [Potential future improvements](#potential-future-improvements)

## Repository overview

The repository preserves coursework in chronological, lecture-wise folders.
Each dated folder captures a particular exercise, experiment, or project as
the corresponding concepts were being practiced. This organization shows an
incremental progression from basic HTML and React setup to component
composition, state, effects, routing, data-driven interfaces, and shared
context.

The folders are intentionally not uniform. Some contain standalone Vite
applications, while others contain a single HTML exercise, a backend or
frontend half of a larger experiment, or supporting source files. Exercises
can therefore differ in completeness, complexity, visual styling, and
project structure. Code may be revisited, refined, or refactored as concepts
are learned again.

## Technologies and tools

The following technologies and concepts are present in the source files or
project manifests:

| Technology or concept | Role in this repository |
| --- | --- |
| HTML5 | Document structure and the standalone exercise in [`007-22SEP2026/PR Generations/UjjwalRaj.html`](./007-22SEP2026/PR%20Generations/UjjwalRaj.html). |
| CSS3 | Component and page styling across the React exercises and the standalone HTML page. |
| JavaScript and ES modules | Application logic, imports/exports, array operations, event handlers, and browser behavior. |
| React | JSX components and client-side interfaces in the Vite projects. |
| React Hooks | `useState`, `useEffect`, and `useMemo` are used in different exercises. |
| React Context API | A context/provider exercise is present in [`017-28OCT2026/contextAPI`](./017-28OCT2026/contextAPI). |
| React Router | Route-based navigation is present in [`0012-13OCT2026`](./0012-13OCT2026) and [`013-14OCT2026`](./013-14OCT2026); the later project also declares `react-router-dom`. |
| Vite | Development server and production build tooling for the React applications. |
| npm | Dependency installation and project scripts, with separate manifests in the independent applications. |
| Express, Mongoose, CORS, dotenv, and bcrypt | Backend dependencies and code in [`011-08OCT2026-fullStack/backend`](./011-08OCT2026-fullStack/backend). |
| Material UI, Emotion, Tailwind CSS, and React Icons | UI and styling dependencies declared by [`016-27OCT2026`](./016-27OCT2026). |
| Git and GitHub | Version control and repository hosting for the coursework archive. |

These technologies are not necessarily used by every folder. The relevant
project manifest and source files are the authoritative reference for each
exercise.

## Directory guide

The dated folders retain their original names. Generated `node_modules`,
`dist`, and `.vite` directories are omitted from this guide because they are
dependencies or build output rather than authored coursework.

```text
COLLEGE_WEB_SEM3/
├── 001-8thSEP2026/FirstReact/
├── 0012-13OCT2026/
├── 002-9thSEP2026/FirstLecture/
├── 004-11SEP2026/vite-project/
├── 005-15SEP2026/React-Props{Properties}/
├── 006-18SEP2026/Hooks/
├── 007-22SEP2026/PR Generations/UjjwalRaj.html
├── 008-23SEP2026/useState/
├── 009-06OCT2026/
├── 010-07OCT2026/useEffect/
├── 011-08OCT2026-fullStack/
│   ├── backend/
│   └── frontend/
├── 013-14OCT2026/
├── 014-15OCT2026/
├── 015-16OCT2026/
├── 016-27OCT2026/
└── 017-28OCT2026/contextAPI/
```

### Directory index

| Directory | Type and verified contents |
| --- | --- |
| [`001-8thSEP2026/FirstReact`](./001-8thSEP2026/FirstReact) | First React/Vite application. The source uses JSX, `useState`, imported image assets, and a counter-style starter interface. |
| [`0012-13OCT2026`](./0012-13OCT2026) | Standalone React/Vite application with reusable navigation and page components (`Home`, `About`, `Contact`, `Help`, and `Services`) and route declarations. |
| [`002-9thSEP2026/FirstLecture`](./002-9thSEP2026/FirstLecture) | Early React/Vite starter application with a stateful counter-style interface. |
| [`004-11SEP2026/vite-project`](./004-11SEP2026/vite-project) | React/Vite component-composition exercise using `Block`, `Card`, and `CardBlock` components. |
| [`005-15SEP2026/React-Props{Properties}`](./005-15SEP2026/React-Props%7BProperties%7D) | React props and conditional-rendering exercise with cards, user data, login/admin components, filtering, and local state. |
| [`006-18SEP2026/Hooks`](./006-18SEP2026/Hooks) | Small Hooks exercise centered on `useState` and a counter component. |
| [`007-22SEP2026/PR Generations`](./007-22SEP2026/PR%20Generations) | Standalone HTML/CSS/vanilla JavaScript single-page experiment titled “RONOVA — Ruler of Death”; it is not a Vite application. |
| [`008-23SEP2026/useState`](./008-23SEP2026/useState) | `useState` exercise with controlled text input behavior and like/dislike and increment components. |
| [`009-06OCT2026`](./009-06OCT2026) | Presently contains no authored files in the workspace; no application or setup command can be inferred for this dated folder. |
| [`010-07OCT2026/useEffect`](./010-07OCT2026/useEffect) | React product interface using `useEffect` to fetch data from DummyJSON, plus state, memoized filtering/sorting, favorites, cart behavior, theme switching, and a product modal. |
| [`011-08OCT2026-fullStack/frontend`](./011-08OCT2026-fullStack/frontend) | React/Vite frontend with a product-list interface. |
| [`011-08OCT2026-fullStack/backend`](./011-08OCT2026-fullStack/backend) | Node backend source using Express-related dependencies, CORS, dotenv, bcrypt, and Mongoose. Its manifest currently has no `dev`, `start`, `build`, or `lint` script. |
| [`013-14OCT2026`](./013-14OCT2026) | React/Vite routed interface with `Home`, `About`, and `Service` pages, plus a dark-mode state toggle. |
| [`014-15OCT2026`](./014-15OCT2026) | React/Vite page-and-component exercise with `Home`, `About`, and `Products` components. |
| [`015-16OCT2026`](./015-16OCT2026) | React/Vite application with a single main app entry and associated styling/assets. |
| [`016-27OCT2026`](./016-27OCT2026) | Larger React/Vite travel-style interface with page components, navigation, footer, ratings, local data, routing dependencies, and several UI/styling libraries. |
| [`017-28OCT2026/contextAPI`](./017-28OCT2026/contextAPI) | React Context API exercise with a context module, provider usage, navigation, and components named `A`, `B`, `C`, and `D`. |

## Concepts practiced

The source code demonstrates the following concepts at different points in
the archive:

### Web fundamentals

- Semantic HTML structure and responsive metadata.
- CSS layout, component styling, page styling, and theme-related classes.
- Vanilla JavaScript behavior in [`007-22SEP2026/PR Generations/UjjwalRaj.html`](./007-22SEP2026/PR%20Generations/UjjwalRaj.html).
- ES module imports and exports in the React projects.

### React foundations

- JSX and React entry points using `createRoot`.
- Functional components and reusable component composition.
- Props and data passed into components in [`005-15SEP2026/React-Props{Properties}`](./005-15SEP2026/React-Props%7BProperties%7D).
- Rendering arrays with `map`, filtering data, and conditional UI.
- Form and button event handlers, controlled input state, and local component state.

### Hooks and application behavior

- `useState` for counters, form values, theme state, favorites, carts, and
  other local UI state in [`008-23SEP2026/useState`](./008-23SEP2026/useState)
  and [`010-07OCT2026/useEffect`](./010-07OCT2026/useEffect).
- `useEffect` for asynchronous product retrieval and side-effect handling in
  [`010-07OCT2026/useEffect`](./010-07OCT2026/useEffect).
- `useMemo` for derived product categories and filtered/sorted results in the
  same product exercise.
- Context creation and consumption in
  [`017-28OCT2026/contextAPI/src/context.js`](./017-28OCT2026/contextAPI/src/context.js).

### Navigation, data, and tooling

- Client-side routes and links in [`0012-13OCT2026/src`](./0012-13OCT2026/src)
  and [`013-14OCT2026/src`](./013-14OCT2026/src).
- Fetching JSON data from an external API in the `useEffect` exercise.
- Vite configuration, npm scripts, ESLint configuration, and separate
  application manifests.
- A frontend/backend split in [`011-08OCT2026-fullStack`](./011-08OCT2026-fullStack).

## Getting started

### Prerequisites

- A currently supported Node.js LTS release. No repository-wide Node.js
  version is declared in the manifests, so use the version supported by the
  selected project's Vite and React dependencies.
- npm, installed with Node.js.
- Git, if cloning the repository.

Clone the repository:

```bash
git clone https://github.com/iUjjwalRaj/COLLEGE_WEB_SEM3.git
cd COLLEGE_WEB_SEM3
```

This repository contains multiple independent applications. Enter the
directory of the application you want to run before installing dependencies:

```bash
cd path/to/project
npm install
npm run dev
```

The example applies only when the selected directory contains a
`package.json` with the requested script. The Vite projects print a local
URL in the terminal; open that URL in a browser. Stop the development server
with `Ctrl+C`.

To inspect the scripts available in the current project:

```bash
npm run
```

The standalone HTML exercise can be opened directly in a browser. The
backend folder has dependencies but no development/start script; its current
manifest should be inspected before attempting to run it.

## Available scripts

The Vite application manifests listed below provide the same four scripts:
`dev` starts Vite, `build` creates a production build, `lint` runs ESLint,
and `preview` serves the built output locally.

- [`001-8thSEP2026/FirstReact/package.json`](./001-8thSEP2026/FirstReact/package.json)
- [`0012-13OCT2026/package.json`](./0012-13OCT2026/package.json)
- [`002-9thSEP2026/FirstLecture/package.json`](./002-9thSEP2026/FirstLecture/package.json)
- [`004-11SEP2026/vite-project/package.json`](./004-11SEP2026/vite-project/package.json)
- [`005-15SEP2026/React-Props{Properties}/package.json`](./005-15SEP2026/React-Props%7BProperties%7D/package.json)
- [`006-18SEP2026/Hooks/package.json`](./006-18SEP2026/Hooks/package.json)
- [`008-23SEP2026/useState/package.json`](./008-23SEP2026/useState/package.json)
- [`010-07OCT2026/useEffect/package.json`](./010-07OCT2026/useEffect/package.json)
- [`011-08OCT2026-fullStack/frontend/package.json`](./011-08OCT2026-fullStack/frontend/package.json)
- [`013-14OCT2026/package.json`](./013-14OCT2026/package.json)
- [`014-15OCT2026/package.json`](./014-15OCT2026/package.json)
- [`015-16OCT2026/package.json`](./015-16OCT2026/package.json)
- [`016-27OCT2026/package.json`](./016-27OCT2026/package.json)
- [`017-28OCT2026/contextAPI/package.json`](./017-28OCT2026/contextAPI/package.json)

The backend manifest at
[`011-08OCT2026-fullStack/backend/package.json`](./011-08OCT2026-fullStack/backend/package.json)
contains only the placeholder `test` script, which exits with an error. It
does not currently define a runnable backend command.

## Learning roadmap

The chronological material shows this progression in the code:

1. HTML, CSS, JavaScript, and the initial React/Vite starter applications.
2. JSX, functional components, reusable components, and composition.
3. Props, user-data rendering, filtering, conditional content, and event
   handlers.
4. Local state with `useState`, controlled inputs, counters, and interactive
   UI.
5. Effects and asynchronous data fetching with `useEffect`, followed by
   derived data with `useMemo`.
6. Route-based page navigation and multi-page component organization.
7. Larger data-driven interfaces, UI libraries, styling integrations, and a
   frontend/backend experiment.
8. Shared state through the React Context API.

This is a description of concepts present in the source, not a claim of
mastery or completion.

## Code quality and project status

This is an evolving educational repository. Some exercises are deliberately
small demonstrations; others contain more substantial interfaces. Styling,
components, data flows, or backend wiring may remain unfinished, and projects
use different structures because they were created at different stages of
learning. Evaluate each project independently rather than assuming that the
entire archive is production-ready or that every project currently passes
linting and builds.

## Academic integrity and reuse

The repository is intended primarily for personal learning, revision, and
demonstration of web development practice. Readers are encouraged to
understand and reimplement ideas rather than blindly copy coursework.
Nothing in this archive claims official affiliation with, endorsement by, or
maintenance by an educational institution.

## Contributing

Suggestions and issue reports are welcome when they help clarify an exercise,
correct documentation, or improve the educational value of the archive.
Please open a GitHub issue with the relevant path and a concise description.
External code contributions may be accepted where they are appropriate for a
coursework archive and preserve the educational context.

## License

This repository is distributed under the [MIT License](./LICENSE), subject to
the scope and ownership qualifications in that file. In general, the MIT
License permits reuse, modification, and redistribution, provided that its
terms and copyright notice are retained.

## Author and repository links

- GitHub profile: [iUjjwalRaj](https://github.com/iUjjwalRaj)
- Repository: [iUjjwalRaj/COLLEGE_WEB_SEM3](https://github.com/iUjjwalRaj/COLLEGE_WEB_SEM3)

## Potential future improvements

Possible future improvements include:

- Adding short exercise-specific explanations to the dated folders.
- Adding screenshots for substantial interfaces where they improve
  discoverability.
- Recording project-specific setup details as the applications become more
  complete.
- Adding further examples as new coursework is completed.

