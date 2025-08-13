import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Building2, Plus, Edit, Trash2, Eye, TrendingUp, DollarSign, MapPin, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Deal {
  id: string;
  deal_id: string;
  deal_name: string;
  deal_status: string;
  transaction_type: string;
  announcement_date?: string;
  closing_date?: string;
  deal_value?: number;
  deal_value_formatted?: string;
  deal_size_category?: string;
  price_per_sf?: number;
  cap_rate?: number;
  investment_strategy?: string;
  property_name?: string;
  property_type?: string;
  property_subtype?: string;
  square_footage?: number;
  year_built?: number;
  occupancy_rate?: number;
  image_url?: string;
  city?: string;
  state_province?: string;
  country?: string;
  buyer?: string;
  seller?: string;
  broker?: string;
  deal_highlights?: any;
  market_intelligence?: string;
  featured_deal: boolean;
  recent_deal: boolean;
  pipeline_deal: boolean;
  trending_deal: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const DealsManagement = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingDeal, setEditingDeal] = useState<Deal | null>(null);
  const { toast } = useToast();

  const [newDeal, setNewDeal] = useState({
    deal_id: "",
    deal_name: "",
    deal_status: "Draft",
    transaction_type: "",
    announcement_date: "",
    closing_date: "",
    deal_value: "",
    deal_value_formatted: "",
    deal_size_category: "",
    price_per_sf: "",
    cap_rate: "",
    investment_strategy: "",
    property_name: "",
    property_type: "",
    property_subtype: "",
    square_footage: "",
    year_built: "",
    occupancy_rate: "",
    image_url: "",
    city: "",
    state_province: "",
    country: "",
    buyer: "",
    seller: "",
    broker: "",
    deal_highlights: "",
    market_intelligence: "",
    featured_deal: false,
    recent_deal: false,
    pipeline_deal: false,
    trending_deal: false,
    published: false
  });

  const dealStatuses = ["Draft", "Rumored", "Marketed", "Under Contract", "Closed", "Cancelled"];
  const transactionTypes = ["Sale", "Lease", "Sale-Leaseback", "Portfolio Transaction", "Ground Lease", "Acquisition"];
  const propertyTypes = ["Office", "Retail", "Industrial", "Multifamily", "Hotel", "Mixed-Use", "Land", "Healthcare"];
  const dealSizeCategories = ["Small Commercial", "Mid-Market", "Large Commercial", "Institutional"];

  const fetchDeals = async () => {
    try {
      const { data, error } = await supabase
        .from("deals")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setDeals(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch deals",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const generateDealId = () => {
    return `DEAL_${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
  };

  const handleSaveDeal = async () => {
    try {
      const dealData = {
        ...newDeal,
        deal_id: newDeal.deal_id || generateDealId(),
        deal_value: newDeal.deal_value ? parseInt(newDeal.deal_value) * 100 : null, // Convert to cents
        price_per_sf: newDeal.price_per_sf ? parseFloat(newDeal.price_per_sf) : null,
        cap_rate: newDeal.cap_rate ? parseFloat(newDeal.cap_rate) : null,
        square_footage: newDeal.square_footage ? parseInt(newDeal.square_footage) : null,
        year_built: newDeal.year_built ? parseInt(newDeal.year_built) : null,
        occupancy_rate: newDeal.occupancy_rate ? parseFloat(newDeal.occupancy_rate) / 100 : null, // Convert to decimal
        deal_highlights: newDeal.deal_highlights ? newDeal.deal_highlights.split(",").map(h => h.trim()) : [],
        announcement_date: newDeal.announcement_date || null,
        closing_date: newDeal.closing_date || null
      };

      if (editingDeal) {
        const { error } = await supabase
          .from("deals")
          .update(dealData)
          .eq("id", editingDeal.id);
        if (error) throw error;
        toast({ title: "Success", description: "Deal updated successfully" });
      } else {
        const { error } = await supabase
          .from("deals")
          .insert([dealData]);
        if (error) throw error;
        toast({ title: "Success", description: "Deal created successfully" });
      }

      resetForm();
      setDialogOpen(false);
      fetchDeals();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save deal",
        variant: "destructive",
      });
    }
  };

  const handleEditDeal = (deal: Deal) => {
    setEditingDeal(deal);
    setNewDeal({
      deal_id: deal.deal_id,
      deal_name: deal.deal_name,
      deal_status: deal.deal_status,
      transaction_type: deal.transaction_type,
      announcement_date: deal.announcement_date || "",
      closing_date: deal.closing_date || "",
      deal_value: deal.deal_value ? (deal.deal_value / 100).toString() : "",
      deal_value_formatted: deal.deal_value_formatted || "",
      deal_size_category: deal.deal_size_category || "",
      price_per_sf: deal.price_per_sf?.toString() || "",
      cap_rate: deal.cap_rate?.toString() || "",
      investment_strategy: deal.investment_strategy || "",
      property_name: deal.property_name || "",
      property_type: deal.property_type || "",
      property_subtype: deal.property_subtype || "",
      square_footage: deal.square_footage?.toString() || "",
      year_built: deal.year_built?.toString() || "",
      occupancy_rate: deal.occupancy_rate ? (deal.occupancy_rate * 100).toString() : "",
      image_url: deal.image_url || "",
      city: deal.city || "",
      state_province: deal.state_province || "",
      country: deal.country || "",
      buyer: deal.buyer || "",
      seller: deal.seller || "",
      broker: deal.broker || "",
      deal_highlights: deal.deal_highlights?.join(", ") || "",
      market_intelligence: deal.market_intelligence || "",
      featured_deal: deal.featured_deal,
      recent_deal: deal.recent_deal,
      pipeline_deal: deal.pipeline_deal,
      trending_deal: deal.trending_deal,
      published: deal.published
    });
    setDialogOpen(true);
  };

  const handleDeleteDeal = async (dealId: string) => {
    if (!confirm("Are you sure you want to delete this deal?")) return;

    try {
      const { error } = await supabase
        .from("deals")
        .delete()
        .eq("id", dealId);

      if (error) throw error;
      toast({ title: "Success", description: "Deal deleted successfully" });
      fetchDeals();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete deal",
        variant: "destructive",
      });
    }
  };

  const toggleDealFlag = async (dealId: string, flag: string, currentValue: boolean) => {
    try {
      const { error } = await supabase
        .from("deals")
        .update({ [flag]: !currentValue })
        .eq("id", dealId);

      if (error) throw error;
      toast({ title: "Success", description: `Deal ${flag} updated` });
      fetchDeals();
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to update ${flag}`,
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setNewDeal({
      deal_id: "",
      deal_name: "",
      deal_status: "Draft",
      transaction_type: "",
      announcement_date: "",
      closing_date: "",
      deal_value: "",
      deal_value_formatted: "",
      deal_size_category: "",
      price_per_sf: "",
      cap_rate: "",
      investment_strategy: "",
      property_name: "",
      property_type: "",
      property_subtype: "",
      square_footage: "",
      year_built: "",
      occupancy_rate: "",
      image_url: "",
      city: "",
      state_province: "",
      country: "",
      buyer: "",
      seller: "",
      broker: "",
      deal_highlights: "",
      market_intelligence: "",
      featured_deal: false,
      recent_deal: false,
      pipeline_deal: false,
      trending_deal: false,
      published: false
    });
    setEditingDeal(null);
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  const filteredDeals = deals.filter(deal => {
    const matchesSearch = deal.deal_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deal.property_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deal.city?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || deal.deal_status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return <div className="flex items-center justify-center py-20">Loading deals...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            Deals Management
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage real estate transactions, pipeline, and market intelligence
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm} className="gap-2">
              <Plus className="w-4 h-4" />
              Create Deal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingDeal ? "Edit Deal" : "Create New Deal"}
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="deal_name">Deal Name</Label>
                  <Input
                    id="deal_name"
                    value={newDeal.deal_name}
                    onChange={(e) => setNewDeal({ ...newDeal, deal_name: e.target.value })}
                    placeholder="Manhattan Office Tower Sale"
                  />
                </div>
                <div>
                  <Label htmlFor="deal_status">Deal Status</Label>
                  <Select value={newDeal.deal_status} onValueChange={(value) => setNewDeal({ ...newDeal, deal_status: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {dealStatuses.map((status) => (
                        <SelectItem key={status} value={status}>{status}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="transaction_type">Transaction Type</Label>
                  <Select value={newDeal.transaction_type} onValueChange={(value) => setNewDeal({ ...newDeal, transaction_type: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {transactionTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="deal_value">Deal Value ($)</Label>
                  <Input
                    id="deal_value"
                    type="number"
                    value={newDeal.deal_value}
                    onChange={(e) => setNewDeal({ ...newDeal, deal_value: e.target.value })}
                    placeholder="2800000000"
                  />
                </div>
                <div>
                  <Label htmlFor="deal_value_formatted">Deal Value Formatted</Label>
                  <Input
                    id="deal_value_formatted"
                    value={newDeal.deal_value_formatted}
                    onChange={(e) => setNewDeal({ ...newDeal, deal_value_formatted: e.target.value })}
                    placeholder="$2.8B"
                  />
                </div>
                <div>
                  <Label htmlFor="property_name">Property Name</Label>
                  <Input
                    id="property_name"
                    value={newDeal.property_name}
                    onChange={(e) => setNewDeal({ ...newDeal, property_name: e.target.value })}
                    placeholder="Manhattan Office Tower"
                  />
                </div>
                <div>
                  <Label htmlFor="property_type">Property Type</Label>
                  <Select value={newDeal.property_type} onValueChange={(value) => setNewDeal({ ...newDeal, property_type: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="buyer">Buyer</Label>
                  <Input
                    id="buyer"
                    value={newDeal.buyer}
                    onChange={(e) => setNewDeal({ ...newDeal, buyer: e.target.value })}
                    placeholder="Blackstone Group"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="seller">Seller</Label>
                  <Input
                    id="seller"
                    value={newDeal.seller}
                    onChange={(e) => setNewDeal({ ...newDeal, seller: e.target.value })}
                    placeholder="Brookfield Properties"
                  />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={newDeal.city}
                    onChange={(e) => setNewDeal({ ...newDeal, city: e.target.value })}
                    placeholder="New York"
                  />
                </div>
                <div>
                  <Label htmlFor="state_province">State/Province</Label>
                  <Input
                    id="state_province"
                    value={newDeal.state_province}
                    onChange={(e) => setNewDeal({ ...newDeal, state_province: e.target.value })}
                    placeholder="NY"
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={newDeal.country}
                    onChange={(e) => setNewDeal({ ...newDeal, country: e.target.value })}
                    placeholder="United States"
                  />
                </div>
                <div>
                  <Label htmlFor="image_url">Image URL</Label>
                  <Input
                    id="image_url"
                    value={newDeal.image_url}
                    onChange={(e) => setNewDeal({ ...newDeal, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <Label htmlFor="announcement_date">Announcement Date</Label>
                  <Input
                    id="announcement_date"
                    type="date"
                    value={newDeal.announcement_date}
                    onChange={(e) => setNewDeal({ ...newDeal, announcement_date: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="closing_date">Closing Date</Label>
                  <Input
                    id="closing_date"
                    type="date"
                    value={newDeal.closing_date}
                    onChange={(e) => setNewDeal({ ...newDeal, closing_date: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="cap_rate">Cap Rate (%)</Label>
                    <Input
                      id="cap_rate"
                      type="number"
                      step="0.01"
                      value={newDeal.cap_rate}
                      onChange={(e) => setNewDeal({ ...newDeal, cap_rate: e.target.value })}
                      placeholder="5.2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="occupancy_rate">Occupancy Rate (%)</Label>
                    <Input
                      id="occupancy_rate"
                      type="number"
                      step="0.01"
                      value={newDeal.occupancy_rate}
                      onChange={(e) => setNewDeal({ ...newDeal, occupancy_rate: e.target.value })}
                      placeholder="94"
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-4">
                <div>
                  <Label htmlFor="deal_highlights">Deal Highlights (comma-separated)</Label>
                  <Textarea
                    id="deal_highlights"
                    value={newDeal.deal_highlights}
                    onChange={(e) => setNewDeal({ ...newDeal, deal_highlights: e.target.value })}
                    placeholder="Prime location, Modern amenities, Stabilized income"
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="market_intelligence">Market Intelligence</Label>
                  <Textarea
                    id="market_intelligence"
                    value={newDeal.market_intelligence}
                    onChange={(e) => setNewDeal({ ...newDeal, market_intelligence: e.target.value })}
                    placeholder="Market analysis and insights..."
                    rows={3}
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="featured_deal"
                      checked={newDeal.featured_deal}
                      onCheckedChange={(checked) => setNewDeal({ ...newDeal, featured_deal: checked })}
                    />
                    <Label htmlFor="featured_deal">Featured Deal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="recent_deal"
                      checked={newDeal.recent_deal}
                      onCheckedChange={(checked) => setNewDeal({ ...newDeal, recent_deal: checked })}
                    />
                    <Label htmlFor="recent_deal">Recent Deal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="pipeline_deal"
                      checked={newDeal.pipeline_deal}
                      onCheckedChange={(checked) => setNewDeal({ ...newDeal, pipeline_deal: checked })}
                    />
                    <Label htmlFor="pipeline_deal">Pipeline Deal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="published"
                      checked={newDeal.published}
                      onCheckedChange={(checked) => setNewDeal({ ...newDeal, published: checked })}
                    />
                    <Label htmlFor="published">Published</Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Button onClick={handleSaveDeal} className="flex-1">
                {editingDeal ? "Update Deal" : "Create Deal"}
              </Button>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Search deals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="max-w-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {dealStatuses.map((status) => (
              <SelectItem key={status} value={status}>{status}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Deal</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Flags</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDeals.map((deal) => (
              <TableRow key={deal.id}>
                <TableCell>
                  <div className="space-y-1">
                    <div className="font-medium">{deal.deal_name}</div>
                    <div className="text-sm text-muted-foreground">{deal.property_name}</div>
                    <div className="text-xs text-muted-foreground">{deal.deal_id}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={deal.deal_status === "Closed" ? "default" : "secondary"}>
                    {deal.deal_status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{deal.deal_value_formatted}</div>
                  {deal.cap_rate && (
                    <div className="text-sm text-muted-foreground">{deal.cap_rate}% Cap</div>
                  )}
                </TableCell>
                <TableCell>
                  <div className="text-sm">
                    {deal.city}{deal.state_province && `, ${deal.state_province}`}
                  </div>
                  <div className="text-xs text-muted-foreground">{deal.country}</div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1 flex-wrap">
                    {deal.featured_deal && (
                      <Badge variant="outline" className="text-xs">Featured</Badge>
                    )}
                    {deal.recent_deal && (
                      <Badge variant="outline" className="text-xs">Recent</Badge>
                    )}
                    {deal.pipeline_deal && (
                      <Badge variant="outline" className="text-xs">Pipeline</Badge>
                    )}
                    {deal.published && (
                      <Badge variant="default" className="text-xs">Published</Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEditDeal(deal)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleDealFlag(deal.id, "published", deal.published)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleDealFlag(deal.id, "featured_deal", deal.featured_deal)}
                    >
                      <TrendingUp className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteDeal(deal.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {filteredDeals.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">
            No deals found matching your criteria.
          </div>
        )}
      </Card>
    </div>
  );
};

export default DealsManagement;