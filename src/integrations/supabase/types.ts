export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      articles: {
        Row: {
          author_id: string | null
          author_name: string | null
          category: string
          content: string | null
          created_at: string
          excerpt: string | null
          featured: boolean | null
          featured_order: number | null
          id: string
          image_url: string | null
          metric_value: string | null
          published: boolean | null
          published_date: string | null
          read_time: number | null
          slug: string | null
          subtitle: string | null
          title: string
          updated_at: string
          view_count: number | null
        }
        Insert: {
          author_id?: string | null
          author_name?: string | null
          category: string
          content?: string | null
          created_at?: string
          excerpt?: string | null
          featured?: boolean | null
          featured_order?: number | null
          id?: string
          image_url?: string | null
          metric_value?: string | null
          published?: boolean | null
          published_date?: string | null
          read_time?: number | null
          slug?: string | null
          subtitle?: string | null
          title: string
          updated_at?: string
          view_count?: number | null
        }
        Update: {
          author_id?: string | null
          author_name?: string | null
          category?: string
          content?: string | null
          created_at?: string
          excerpt?: string | null
          featured?: boolean | null
          featured_order?: number | null
          id?: string
          image_url?: string | null
          metric_value?: string | null
          published?: boolean | null
          published_date?: string | null
          read_time?: number | null
          slug?: string | null
          subtitle?: string | null
          title?: string
          updated_at?: string
          view_count?: number | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      deals: {
        Row: {
          announcement_date: string | null
          broker: string | null
          buyer: string | null
          buyer_type: string | null
          cap_rate: number | null
          city: string | null
          closing_date: string | null
          competitive_dynamics: string | null
          confidence_score: number | null
          country: string | null
          created_at: string
          data_quality_score: number | null
          deal_highlights: Json | null
          deal_id: string
          deal_name: string
          deal_size_category: string | null
          deal_status: string
          deal_value: number | null
          deal_value_formatted: string | null
          description: string | null
          featured_deal: boolean | null
          full_address: string | null
          id: string
          image_url: string | null
          investment_strategy: string | null
          last_updated: string | null
          latitude: number | null
          lender: string | null
          longitude: number | null
          market_intelligence: string | null
          occupancy_rate: number | null
          pipeline_deal: boolean | null
          postal_code: string | null
          price_per_sf: number | null
          property_name: string | null
          property_subtype: string | null
          property_type: string | null
          published: boolean | null
          recent_deal: boolean | null
          region: string | null
          seller: string | null
          seller_type: string | null
          source: string | null
          square_footage: number | null
          state_province: string | null
          strategic_significance: string | null
          street_address: string | null
          transaction_type: string
          trending_deal: boolean | null
          updated_at: string
          year_built: number | null
        }
        Insert: {
          announcement_date?: string | null
          broker?: string | null
          buyer?: string | null
          buyer_type?: string | null
          cap_rate?: number | null
          city?: string | null
          closing_date?: string | null
          competitive_dynamics?: string | null
          confidence_score?: number | null
          country?: string | null
          created_at?: string
          data_quality_score?: number | null
          deal_highlights?: Json | null
          deal_id: string
          deal_name: string
          deal_size_category?: string | null
          deal_status?: string
          deal_value?: number | null
          deal_value_formatted?: string | null
          description?: string | null
          featured_deal?: boolean | null
          full_address?: string | null
          id?: string
          image_url?: string | null
          investment_strategy?: string | null
          last_updated?: string | null
          latitude?: number | null
          lender?: string | null
          longitude?: number | null
          market_intelligence?: string | null
          occupancy_rate?: number | null
          pipeline_deal?: boolean | null
          postal_code?: string | null
          price_per_sf?: number | null
          property_name?: string | null
          property_subtype?: string | null
          property_type?: string | null
          published?: boolean | null
          recent_deal?: boolean | null
          region?: string | null
          seller?: string | null
          seller_type?: string | null
          source?: string | null
          square_footage?: number | null
          state_province?: string | null
          strategic_significance?: string | null
          street_address?: string | null
          transaction_type: string
          trending_deal?: boolean | null
          updated_at?: string
          year_built?: number | null
        }
        Update: {
          announcement_date?: string | null
          broker?: string | null
          buyer?: string | null
          buyer_type?: string | null
          cap_rate?: number | null
          city?: string | null
          closing_date?: string | null
          competitive_dynamics?: string | null
          confidence_score?: number | null
          country?: string | null
          created_at?: string
          data_quality_score?: number | null
          deal_highlights?: Json | null
          deal_id?: string
          deal_name?: string
          deal_size_category?: string | null
          deal_status?: string
          deal_value?: number | null
          deal_value_formatted?: string | null
          description?: string | null
          featured_deal?: boolean | null
          full_address?: string | null
          id?: string
          image_url?: string | null
          investment_strategy?: string | null
          last_updated?: string | null
          latitude?: number | null
          lender?: string | null
          longitude?: number | null
          market_intelligence?: string | null
          occupancy_rate?: number | null
          pipeline_deal?: boolean | null
          postal_code?: string | null
          price_per_sf?: number | null
          property_name?: string | null
          property_subtype?: string | null
          property_type?: string | null
          published?: boolean | null
          recent_deal?: boolean | null
          region?: string | null
          seller?: string | null
          seller_type?: string | null
          source?: string | null
          square_footage?: number | null
          state_province?: string | null
          strategic_significance?: string | null
          street_address?: string | null
          transaction_type?: string
          trending_deal?: boolean | null
          updated_at?: string
          year_built?: number | null
        }
        Relationships: []
      }
      events: {
        Row: {
          capacity: number | null
          created_at: string
          description: string | null
          end_date: string | null
          event_type: string
          featured: boolean | null
          id: string
          image_url: string | null
          location: string | null
          organizer: string | null
          price: number | null
          published: boolean | null
          registration_url: string | null
          start_date: string
          title: string
          updated_at: string
          venue: string | null
        }
        Insert: {
          capacity?: number | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          event_type: string
          featured?: boolean | null
          id?: string
          image_url?: string | null
          location?: string | null
          organizer?: string | null
          price?: number | null
          published?: boolean | null
          registration_url?: string | null
          start_date: string
          title: string
          updated_at?: string
          venue?: string | null
        }
        Update: {
          capacity?: number | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          event_type?: string
          featured?: boolean | null
          id?: string
          image_url?: string | null
          location?: string | null
          organizer?: string | null
          price?: number | null
          published?: boolean | null
          registration_url?: string | null
          start_date?: string
          title?: string
          updated_at?: string
          venue?: string | null
        }
        Relationships: []
      }
      snapshot_cities: {
        Row: {
          country_id: string
          created_at: string
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          country_id: string
          created_at?: string
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          country_id?: string
          created_at?: string
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "snapshot_cities_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "snapshot_countries"
            referencedColumns: ["id"]
          },
        ]
      }
      snapshot_countries: {
        Row: {
          created_at: string
          id: string
          name: string
          region_id: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          region_id: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          region_id?: string
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "snapshot_countries_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "snapshot_geographic_regions"
            referencedColumns: ["id"]
          },
        ]
      }
      snapshot_geographic_regions: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      snapshot_market_comparisons: {
        Row: {
          comparison_data: Json
          comparison_type: string
          country_id: string | null
          created_at: string
          description: string | null
          id: string
          published: boolean | null
          region_id: string | null
          sector_id: string | null
          title: string
          updated_at: string
        }
        Insert: {
          comparison_data: Json
          comparison_type: string
          country_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          published?: boolean | null
          region_id?: string | null
          sector_id?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          comparison_data?: Json
          comparison_type?: string
          country_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          published?: boolean | null
          region_id?: string | null
          sector_id?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "snapshot_market_comparisons_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "snapshot_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_market_comparisons_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "snapshot_geographic_regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_market_comparisons_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "snapshot_sectors"
            referencedColumns: ["id"]
          },
        ]
      }
      snapshot_market_metrics: {
        Row: {
          change_direction: string | null
          change_percentage: number | null
          city_id: string | null
          country_id: string | null
          created_at: string
          current_value: string
          data_date: string
          id: string
          metric_category: string
          metric_family: string
          metric_name: string
          region_id: string | null
          sector_id: string | null
          sparkline_data: Json | null
          sub_sector_id: string | null
          updated_at: string
        }
        Insert: {
          change_direction?: string | null
          change_percentage?: number | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          current_value: string
          data_date?: string
          id?: string
          metric_category: string
          metric_family: string
          metric_name: string
          region_id?: string | null
          sector_id?: string | null
          sparkline_data?: Json | null
          sub_sector_id?: string | null
          updated_at?: string
        }
        Update: {
          change_direction?: string | null
          change_percentage?: number | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          current_value?: string
          data_date?: string
          id?: string
          metric_category?: string
          metric_family?: string
          metric_name?: string
          region_id?: string | null
          sector_id?: string | null
          sparkline_data?: Json | null
          sub_sector_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "snapshot_market_metrics_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "snapshot_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_market_metrics_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "snapshot_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_market_metrics_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "snapshot_geographic_regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_market_metrics_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "snapshot_sectors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_market_metrics_sub_sector_id_fkey"
            columns: ["sub_sector_id"]
            isOneToOne: false
            referencedRelation: "snapshot_sub_sectors"
            referencedColumns: ["id"]
          },
        ]
      }
      snapshot_sector_intelligence: {
        Row: {
          content: string
          country_id: string | null
          created_at: string
          id: string
          metrics: Json | null
          published: boolean | null
          region_id: string | null
          sector_id: string
          sub_sector_id: string | null
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          country_id?: string | null
          created_at?: string
          id?: string
          metrics?: Json | null
          published?: boolean | null
          region_id?: string | null
          sector_id: string
          sub_sector_id?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          country_id?: string | null
          created_at?: string
          id?: string
          metrics?: Json | null
          published?: boolean | null
          region_id?: string | null
          sector_id?: string
          sub_sector_id?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "snapshot_sector_intelligence_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "snapshot_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_sector_intelligence_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "snapshot_geographic_regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_sector_intelligence_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "snapshot_sectors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_sector_intelligence_sub_sector_id_fkey"
            columns: ["sub_sector_id"]
            isOneToOne: false
            referencedRelation: "snapshot_sub_sectors"
            referencedColumns: ["id"]
          },
        ]
      }
      snapshot_sectors: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      snapshot_sub_sectors: {
        Row: {
          created_at: string
          id: string
          name: string
          sector_id: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          sector_id: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          sector_id?: string
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "snapshot_sub_sectors_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "snapshot_sectors"
            referencedColumns: ["id"]
          },
        ]
      }
      snapshot_trending_people: {
        Row: {
          change_percentage: number | null
          company: string
          country_id: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          position: string
          published: boolean | null
          region_id: string | null
          sector_id: string | null
          updated_at: string
        }
        Insert: {
          change_percentage?: number | null
          company: string
          country_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          position: string
          published?: boolean | null
          region_id?: string | null
          sector_id?: string | null
          updated_at?: string
        }
        Update: {
          change_percentage?: number | null
          company?: string
          country_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          position?: string
          published?: boolean | null
          region_id?: string | null
          sector_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "snapshot_trending_people_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "snapshot_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_trending_people_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "snapshot_geographic_regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_trending_people_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "snapshot_sectors"
            referencedColumns: ["id"]
          },
        ]
      }
      snapshot_trending_projects: {
        Row: {
          change_percentage: number | null
          city_id: string | null
          country_id: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          location: string
          name: string
          project_status: string
          project_value: string
          published: boolean | null
          region_id: string | null
          sector_id: string | null
          sub_sector_id: string | null
          updated_at: string
        }
        Insert: {
          change_percentage?: number | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          location: string
          name: string
          project_status: string
          project_value: string
          published?: boolean | null
          region_id?: string | null
          sector_id?: string | null
          sub_sector_id?: string | null
          updated_at?: string
        }
        Update: {
          change_percentage?: number | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string
          name?: string
          project_status?: string
          project_value?: string
          published?: boolean | null
          region_id?: string | null
          sector_id?: string | null
          sub_sector_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "snapshot_trending_projects_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "snapshot_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_trending_projects_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "snapshot_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_trending_projects_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "snapshot_geographic_regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_trending_projects_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "snapshot_sectors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "snapshot_trending_projects_sub_sector_id_fkey"
            columns: ["sub_sector_id"]
            isOneToOne: false
            referencedRelation: "snapshot_sub_sectors"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_slug: {
        Args: { title: string }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
