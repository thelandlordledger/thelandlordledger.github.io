import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface MarketMetric {
  id: string;
  metric_name: string;
  metric_category: string;
  metric_family: string;
  current_value: string;
  change_percentage: number | null;
  change_direction: string | null;
  sparkline_data: any;
  region_id: string | null;
  country_id: string | null;
  city_id: string | null;
  sector_id: string | null;
  sub_sector_id: string | null;
  data_date: string;
  created_at: string;
  updated_at: string;
}

export interface SectorIntelligence {
  id: string;
  title: string;
  content: string;
  metrics: any;
  sector_id: string;
  sub_sector_id: string | null;
  region_id: string | null;
  country_id: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface TrendingPerson {
  id: string;
  name: string;
  company: string;
  position: string;
  change_percentage: number | null;
  description: string | null;
  image_url: string | null;
  sector_id: string | null;
  region_id: string | null;
  country_id: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface TrendingProject {
  id: string;
  name: string;
  location: string;
  project_value: string;
  project_status: string;
  change_percentage: number | null;
  description: string | null;
  image_url: string | null;
  sector_id: string | null;
  sub_sector_id: string | null;
  region_id: string | null;
  country_id: string | null;
  city_id: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface GeographicRegion {
  id: string;
  name: string;
  slug: string;
}

export interface Country {
  id: string;
  name: string;
  slug: string;
  region_id: string;
}

export interface City {
  id: string;
  name: string;
  slug: string;
  country_id: string;
}

export interface Sector {
  id: string;
  name: string;
  slug: string;
}

export interface SubSector {
  id: string;
  name: string;
  slug: string;
  sector_id: string;
}

export const useMarketTrends = (
  regionSlug?: string,
  countrySlug?: string,
  citySlug?: string,
  sectorSlug?: string,
  subSectorSlug?: string
) => {
  const [metrics, setMetrics] = useState<MarketMetric[]>([]);
  const [sectorIntelligence, setSectorIntelligence] = useState<SectorIntelligence[]>([]);
  const [trendingPeople, setTrendingPeople] = useState<TrendingPerson[]>([]);
  const [trendingProjects, setTrendingProjects] = useState<TrendingProject[]>([]);
  const [regions, setRegions] = useState<GeographicRegion[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [subSectors, setSubSectors] = useState<SubSector[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch taxonomy data
  useEffect(() => {
    const fetchTaxonomy = async () => {
      try {
        const [regionsRes, countriesRes, citiesRes, sectorsRes, subSectorsRes] = await Promise.all([
          supabase.from('snapshot_geographic_regions').select('*').order('name'),
          supabase.from('snapshot_countries').select('*').order('name'),
          supabase.from('snapshot_cities').select('*').order('name'),
          supabase.from('snapshot_sectors').select('*').order('name'),
          supabase.from('snapshot_sub_sectors').select('*').order('name')
        ]);

        if (regionsRes.error) throw regionsRes.error;
        if (countriesRes.error) throw countriesRes.error;
        if (citiesRes.error) throw citiesRes.error;
        if (sectorsRes.error) throw sectorsRes.error;
        if (subSectorsRes.error) throw subSectorsRes.error;

        setRegions(regionsRes.data || []);
        setCountries(countriesRes.data || []);
        setCities(citiesRes.data || []);
        setSectors(sectorsRes.data || []);
        setSubSectors(subSectorsRes.data || []);
      } catch (err) {
        console.error('Error fetching taxonomy:', err);
        setError('Failed to load taxonomy data');
      }
    };

    fetchTaxonomy();
  }, []);

  // Fetch market data based on filters
  useEffect(() => {
    const fetchMarketData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Build filter conditions - be very specific about matching
        let regionId: string | null = null;
        let countryId: string | null = null;
        let cityId: string | null = null;
        let sectorId: string | null = null;
        let subSectorId: string | null = null;

        // Get IDs for filters with exact matching
        if (regionSlug && regionSlug !== 'all') {
          const region = regions.find(r => r.slug === regionSlug);
          regionId = region?.id || null;
        }

        if (countrySlug && countrySlug !== 'all') {
          const country = countries.find(c => c.slug === countrySlug);
          countryId = country?.id || null;
        }

        if (citySlug && citySlug !== 'all') {
          const city = cities.find(c => c.slug === citySlug);
          cityId = city?.id || null;
        }

        if (sectorSlug && sectorSlug !== 'all') {
          const sector = sectors.find(s => s.slug === sectorSlug);
          sectorId = sector?.id || null;
        }

        if (subSectorSlug && subSectorSlug !== 'all') {
          const subSector = subSectors.find(s => s.slug === subSectorSlug);
          subSectorId = subSector?.id || null;
        }

        // Build complex query that prioritizes specificity
        // Use OR conditions to include broader data if specific data is limited
        let metricsQuery = supabase.from('snapshot_market_metrics').select('*');
        
        // Apply filters based on specificity
        if (cityId && sectorId && subSectorId) {
          // Most specific: city + sector + subsector
          metricsQuery = metricsQuery.or(`and(city_id.eq.${cityId},sector_id.eq.${sectorId},sub_sector_id.eq.${subSectorId}),and(country_id.eq.${countryId},sector_id.eq.${sectorId},sub_sector_id.eq.${subSectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId},sub_sector_id.eq.${subSectorId})`);
        } else if (countryId && sectorId && subSectorId) {
          // Country + sector + subsector
          metricsQuery = metricsQuery.or(`and(country_id.eq.${countryId},sector_id.eq.${sectorId},sub_sector_id.eq.${subSectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId},sub_sector_id.eq.${subSectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId})`);
        } else if (regionId && sectorId && subSectorId) {
          // Region + sector + subsector
          metricsQuery = metricsQuery.or(`and(region_id.eq.${regionId},sector_id.eq.${sectorId},sub_sector_id.eq.${subSectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId})`);
        } else if (cityId && sectorId) {
          // City + sector
          metricsQuery = metricsQuery.or(`and(city_id.eq.${cityId},sector_id.eq.${sectorId}),and(country_id.eq.${countryId},sector_id.eq.${sectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId})`);
        } else if (countryId && sectorId) {
          // Country + sector
          metricsQuery = metricsQuery.or(`and(country_id.eq.${countryId},sector_id.eq.${sectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId})`);
        } else if (regionId && sectorId) {
          // Region + sector
          metricsQuery = metricsQuery.eq('region_id', regionId).eq('sector_id', sectorId);
        } else if (regionId) {
          // Region only
          metricsQuery = metricsQuery.eq('region_id', regionId);
        } else if (sectorId) {
          // Sector only
          metricsQuery = metricsQuery.eq('sector_id', sectorId);
        } else {
          // Show limited global data when no filters
          metricsQuery = metricsQuery.limit(8);
        }

        // Apply similar logic for sector intelligence
        let intelligenceQuery = supabase.from('snapshot_sector_intelligence').select('*').eq('published', true);
        
        if (countryId && sectorId && subSectorId) {
          intelligenceQuery = intelligenceQuery.or(`and(country_id.eq.${countryId},sector_id.eq.${sectorId},sub_sector_id.eq.${subSectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId},sub_sector_id.eq.${subSectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId})`);
        } else if (regionId && sectorId && subSectorId) {
          intelligenceQuery = intelligenceQuery.or(`and(region_id.eq.${regionId},sector_id.eq.${sectorId},sub_sector_id.eq.${subSectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId})`);
        } else if (countryId && sectorId) {
          intelligenceQuery = intelligenceQuery.or(`and(country_id.eq.${countryId},sector_id.eq.${sectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId})`);
        } else if (regionId && sectorId) {
          intelligenceQuery = intelligenceQuery.eq('region_id', regionId).eq('sector_id', sectorId);
        } else if (regionId) {
          intelligenceQuery = intelligenceQuery.eq('region_id', regionId);
        } else if (sectorId) {
          intelligenceQuery = intelligenceQuery.eq('sector_id', sectorId);
        }

        // Apply filtering for trending people
        let peopleQuery = supabase.from('snapshot_trending_people').select('*').eq('published', true);
        
        if (countryId && sectorId) {
          peopleQuery = peopleQuery.or(`and(country_id.eq.${countryId},sector_id.eq.${sectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId})`);
        } else if (regionId && sectorId) {
          peopleQuery = peopleQuery.eq('region_id', regionId).eq('sector_id', sectorId);
        } else if (regionId) {
          peopleQuery = peopleQuery.eq('region_id', regionId);
        } else if (sectorId) {
          peopleQuery = peopleQuery.eq('sector_id', sectorId);
        }

        // Apply filtering for trending projects
        let projectsQuery = supabase.from('snapshot_trending_projects').select('*').eq('published', true);
        
        if (cityId && sectorId && subSectorId) {
          projectsQuery = projectsQuery.or(`and(city_id.eq.${cityId},sector_id.eq.${sectorId},sub_sector_id.eq.${subSectorId}),and(country_id.eq.${countryId},sector_id.eq.${sectorId},sub_sector_id.eq.${subSectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId})`);
        } else if (countryId && sectorId && subSectorId) {
          projectsQuery = projectsQuery.or(`and(country_id.eq.${countryId},sector_id.eq.${sectorId},sub_sector_id.eq.${subSectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId})`);
        } else if (cityId && sectorId) {
          projectsQuery = projectsQuery.or(`and(city_id.eq.${cityId},sector_id.eq.${sectorId}),and(country_id.eq.${countryId},sector_id.eq.${sectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId})`);
        } else if (countryId && sectorId) {
          projectsQuery = projectsQuery.or(`and(country_id.eq.${countryId},sector_id.eq.${sectorId}),and(region_id.eq.${regionId},sector_id.eq.${sectorId})`);
        } else if (regionId && sectorId) {
          projectsQuery = projectsQuery.eq('region_id', regionId).eq('sector_id', sectorId);
        } else if (regionId) {
          projectsQuery = projectsQuery.eq('region_id', regionId);
        } else if (sectorId) {
          projectsQuery = projectsQuery.eq('sector_id', sectorId);
        }

        const [metricsRes, intelligenceRes, peopleRes, projectsRes] = await Promise.all([
          metricsQuery,
          intelligenceQuery,
          peopleQuery,
          projectsQuery
        ]);

        if (metricsRes.error) throw metricsRes.error;
        if (intelligenceRes.error) throw intelligenceRes.error;
        if (peopleRes.error) throw peopleRes.error;
        if (projectsRes.error) throw projectsRes.error;

        setMetrics(metricsRes.data || []);
        setSectorIntelligence(intelligenceRes.data || []);
        setTrendingPeople(peopleRes.data || []);
        setTrendingProjects(projectsRes.data || []);
      } catch (err) {
        console.error('Error fetching market data:', err);
        setError('Failed to load market data');
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we have taxonomy data
    if (regions.length > 0 && sectors.length > 0) {
      fetchMarketData();
    }
  }, [regionSlug, countrySlug, citySlug, sectorSlug, subSectorSlug, regions, countries, cities, sectors, subSectors]);

  // Helper function to get countries for a region
  const getCountriesForRegion = (regionSlug: string) => {
    if (regionSlug === 'all') return countries;
    const region = regions.find(r => r.slug === regionSlug);
    if (!region) return [];
    return countries.filter(c => c.region_id === region.id);
  };

  // Helper function to get cities for a country
  const getCitiesForCountry = (countrySlug: string) => {
    if (countrySlug === 'all') return cities;
    const country = countries.find(c => c.slug === countrySlug);
    if (!country) return [];
    return cities.filter(c => c.country_id === country.id);
  };

  // Helper function to get sub-sectors for a sector
  const getSubSectorsForSector = (sectorSlug: string) => {
    if (sectorSlug === 'all') return subSectors;
    const sector = sectors.find(s => s.slug === sectorSlug);
    if (!sector) return [];
    return subSectors.filter(s => s.sector_id === sector.id);
  };

  // Organize metrics by category
  const getMetricsByCategory = (category: string) => {
    const categoryMetrics = metrics.filter(m => m.metric_category === category);
    
    // Group by metric_name to avoid duplicates, pick the most relevant one
    const uniqueMetrics = categoryMetrics.reduce((acc, metric) => {
      const existing = acc.find(m => m.metric_name === metric.metric_name);
      if (!existing) {
        acc.push(metric);
      } else {
        // Replace with more specific or more recent data
        const existingSpecificity = (existing.region_id ? 1 : 0) + (existing.sector_id ? 1 : 0) + (existing.country_id ? 1 : 0);
        const currentSpecificity = (metric.region_id ? 1 : 0) + (metric.sector_id ? 1 : 0) + (metric.country_id ? 1 : 0);
        
        if (currentSpecificity > existingSpecificity) {
          const index = acc.findIndex(m => m.metric_name === metric.metric_name);
          acc[index] = metric;
        }
      }
      return acc;
    }, [] as MarketMetric[]);
    
    return uniqueMetrics;
  };

  // Get the best metrics for a category (prioritizing most specific filters)
  const getBestMetricsForCategory = (category: string, limit: number = 4) => {
    const categoryMetrics = getMetricsByCategory(category);
    
    // Sort by specificity (more specific filters first) and limit results
    return categoryMetrics
      .sort((a, b) => {
        const aSpecificity = (a.region_id ? 1 : 0) + (a.country_id ? 1 : 0) + (a.city_id ? 1 : 0) + (a.sector_id ? 1 : 0) + (a.sub_sector_id ? 1 : 0);
        const bSpecificity = (b.region_id ? 1 : 0) + (b.country_id ? 1 : 0) + (b.city_id ? 1 : 0) + (b.sector_id ? 1 : 0) + (b.sub_sector_id ? 1 : 0);
        return bSpecificity - aSpecificity;
      })
      .slice(0, limit);
  };

  return {
    metrics,
    sectorIntelligence,
    trendingPeople,
    trendingProjects,
    regions,
    countries,
    cities,
    sectors,
    subSectors,
    loading,
    error,
    getCountriesForRegion,
    getCitiesForCountry,
    getSubSectorsForSector,
    getMetricsByCategory,
    getBestMetricsForCategory
  };
};