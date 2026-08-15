import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/theindianjustice-academy/__docusaurus/debug',
    component: ComponentCreator('/theindianjustice-academy/__docusaurus/debug', 'dc2'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/__docusaurus/debug/config',
    component: ComponentCreator('/theindianjustice-academy/__docusaurus/debug/config', '025'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/__docusaurus/debug/content',
    component: ComponentCreator('/theindianjustice-academy/__docusaurus/debug/content', '8f2'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/__docusaurus/debug/globalData',
    component: ComponentCreator('/theindianjustice-academy/__docusaurus/debug/globalData', 'ea0'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/__docusaurus/debug/metadata',
    component: ComponentCreator('/theindianjustice-academy/__docusaurus/debug/metadata', '350'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/__docusaurus/debug/registry',
    component: ComponentCreator('/theindianjustice-academy/__docusaurus/debug/registry', 'd8b'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/__docusaurus/debug/routes',
    component: ComponentCreator('/theindianjustice-academy/__docusaurus/debug/routes', '977'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/blog',
    component: ComponentCreator('/theindianjustice-academy/blog', '9dc'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/blog/archive',
    component: ComponentCreator('/theindianjustice-academy/blog/archive', '5b6'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/blog/authors',
    component: ComponentCreator('/theindianjustice-academy/blog/authors', '460'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/blog/authors/nikhil-m',
    component: ComponentCreator('/theindianjustice-academy/blog/authors/nikhil-m', '95f'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/blog/long-blog-post',
    component: ComponentCreator('/theindianjustice-academy/blog/long-blog-post', '475'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/markdown-page',
    component: ComponentCreator('/theindianjustice-academy/markdown-page', '4e7'),
    exact: true
  },
  {
    path: '/theindianjustice-academy/docs',
    component: ComponentCreator('/theindianjustice-academy/docs', '5f6'),
    routes: [
      {
        path: '/theindianjustice-academy/docs',
        component: ComponentCreator('/theindianjustice-academy/docs', '0ea'),
        routes: [
          {
            path: '/theindianjustice-academy/docs',
            component: ComponentCreator('/theindianjustice-academy/docs', 'a2f'),
            routes: [
              {
                path: '/theindianjustice-academy/docs/category/registration-act',
                component: ComponentCreator('/theindianjustice-academy/docs/category/registration-act', 'd30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/category/the-advocates-act-1961',
                component: ComponentCreator('/theindianjustice-academy/docs/category/the-advocates-act-1961', '15c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/category/the-karnataka-land-revenue-act-1964',
                component: ComponentCreator('/theindianjustice-academy/docs/category/the-karnataka-land-revenue-act-1964', 'a0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/intro',
                component: ComponentCreator('/theindianjustice-academy/docs/intro', '6f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/registration-act/registration-establishments',
                component: ComponentCreator('/theindianjustice-academy/docs/registration-act/registration-establishments', 'de5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-advocates-act-1961/advocates-act-chapter-ii',
                component: ComponentCreator('/theindianjustice-academy/docs/the-advocates-act-1961/advocates-act-chapter-ii', '816'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-advocates-act-1961/K-V-Krishnaswami-Aiyar',
                component: ComponentCreator('/theindianjustice-academy/docs/the-advocates-act-1961/K-V-Krishnaswami-Aiyar', 'c27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-advocates-act-1961/legal-profession-in-india',
                component: ComponentCreator('/theindianjustice-academy/docs/the-advocates-act-1961/legal-profession-in-india', '5cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-advocates-act-1961/senior-advocate',
                component: ComponentCreator('/theindianjustice-academy/docs/the-advocates-act-1961/senior-advocate', '729'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Appeal-and-Revision',
                component: ComponentCreator('/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Appeal-and-Revision', '3a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Boundary and Boundary Marks',
                component: ComponentCreator('/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Boundary and Boundary Marks', '562'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Constitution-and-Powers-of-the-Karnataka-Revenue-Appellate-Tribunal',
                component: ComponentCreator('/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Constitution-and-Powers-of-the-Karnataka-Revenue-Appellate-Tribunal', '431'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/historical-development-of-land-laws',
                component: ComponentCreator('/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/historical-development-of-land-laws', '0b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Land-and-Land-Revenue',
                component: ComponentCreator('/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Land-and-Land-Revenue', '2b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Pre-Independence-and-Post-Independence-Scenario',
                component: ComponentCreator('/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Pre-Independence-and-Post-Independence-Scenario', '3f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/procedures-of-revenue-officers',
                component: ComponentCreator('/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/procedures-of-revenue-officers', 'a8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Realisation of land revenue and other public demands',
                component: ComponentCreator('/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Realisation of land revenue and other public demands', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Record of Rights',
                component: ComponentCreator('/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Record of Rights', '117'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Revenue-Jurisdiction',
                component: ComponentCreator('/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Revenue-Jurisdiction', '6d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Survey and Settlement',
                component: ComponentCreator('/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/Survey and Settlement', '532'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/The-Constitution-and-Powers-of-the-Revenue-Officers',
                component: ComponentCreator('/theindianjustice-academy/docs/the-karnataka-land-revenue-act-1964/The-Constitution-and-Powers-of-the-Revenue-Officers', '2ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/theindianjustice-academy/',
    component: ComponentCreator('/theindianjustice-academy/', 'a74'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
