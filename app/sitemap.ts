import type { MetadataRoute } from 'next';
import { existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { SITE_URL } from '@/lib/seo';

type SitemapRoute = {
  url: string;
  lastModified: Date;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

const appDirectory = path.join(process.cwd(), 'app');

function isStaticRouteSegment(segment: string) {
  return (
    !segment.startsWith('_') &&
    !segment.startsWith('@') &&
    !segment.startsWith('(') &&
    !segment.includes('[') &&
    segment !== 'api'
  );
}

function normalizeRoute(route: string) {
  const normalized = route.replace(/\/+/g, '/');
  return normalized === '' ? '/' : normalized;
}

function collectStaticRoutes(directory: string, route = ''): string[] {
  const routes: string[] = [];

  if (existsSync(path.join(directory, 'page.tsx'))) {
    routes.push(normalizeRoute(route));
  }

  for (const entry of readdirSync(directory)) {
    const absolutePath = path.join(directory, entry);

    if (!statSync(absolutePath).isDirectory() || !isStaticRouteSegment(entry)) {
      continue;
    }

    routes.push(...collectStaticRoutes(absolutePath, `${route}/${entry}`));
  }

  return routes;
}

function routePriority(route: string) {
  if (route === '/') {
    return 1;
  }

  return 0.8;
}

function routeChangeFrequency(route: string): SitemapRoute['changeFrequency'] {
  if (route === '/') {
    return 'monthly';
  }

  return 'yearly';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = collectStaticRoutes(appDirectory);

  return routes.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency: routeChangeFrequency(route),
    priority: routePriority(route),
  }));
}

