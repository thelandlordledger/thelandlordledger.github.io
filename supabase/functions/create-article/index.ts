import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const body = await req.json();
    console.log('Received article data:', body);

    // Validate required fields
    const { title, content, category } = body;
    if (!title || !content || !category) {
      return new Response(JSON.stringify({ 
        error: 'Missing required fields: title, content, and category are required' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate category exists
    const { data: categoryData, error: categoryError } = await supabase
      .from('categories')
      .select('name')
      .eq('name', category)
      .single();

    if (categoryError || !categoryData) {
      return new Response(JSON.stringify({ 
        error: `Invalid category. Available categories: Market Trends, Key Deals, Investment Strategy` 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Prepare article data
    const articleData = {
      title,
      subtitle: body.subtitle || null,
      content,
      category,
      image_url: body.image_url || null,
      read_time: body.read_time || null,
      metric_value: body.metric_value || null,
      slug: body.slug || null, // Will be auto-generated if not provided
      author_id: body.author_id || null,
      published: body.published || false,
    };

    // Insert article into database
    const { data: article, error } = await supabase
      .from('articles')
      .insert([articleData])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(JSON.stringify({ 
        error: 'Failed to create article', 
        details: error.message 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Article created successfully:', article);

    return new Response(JSON.stringify({ 
      success: true, 
      article,
      message: 'Article created successfully' 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in create-article function:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error', 
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});