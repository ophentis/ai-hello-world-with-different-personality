// Supply Chain Manager - Logistics & Inventory Optimization
// Tracks inventory levels, lead times, and JIT delivery scheduling

const InventoryNode = {
  sku: "PART-2024-A",
  warehouseLocation: "ZONE-3-BIN-7",
  quantity: 150,
  reorderPoint: 75,
  leadTimeDays: 14,
  EOQ: 200
};

const suppliers = [
  { name: "Primary", reliability: 0.96, leadTime: 14 },
  { name: "Secondary", reliability: 0.88, leadTime: 21 },
  { name: "Tertiary", reliability: 0.75, leadTime: 35 }
];

function calculateJITDelivery(demand, leadTime) {
  return Math.ceil(demand * leadTime);
}

function evaluateInventoryHealth() {
  const healthMetrics = {
    SKU: InventoryNode.sku,
    currentStock: InventoryNode.quantity,
    reorderPoint: InventoryNode.reorderPoint,
    status: InventoryNode.quantity > InventoryNode.reorderPoint ? "OPTIMAL" : "CRITICAL",
    recommendedOrder: Math.max(0, InventoryNode.reorderPoint - InventoryNode.quantity),
    nextDeliveryETA: InventoryNode.leadTimeDays + " days"
  };

  console.log("=== SUPPLY CHAIN LOGISTICS REPORT ===");
  console.log(JSON.stringify(healthMetrics, null, 2));

  console.log("\n=== SUPPLIER PERFORMANCE RANKING ===");
  suppliers
    .sort((a, b) => b.reliability - a.reliability)
    .forEach((s, i) => {
      console.log(`${i + 1}. ${s.name}: ${(s.reliability * 100).toFixed(1)}% reliability, ${s.leadTime}d lead time`);
    });

  const jitDemand = 45;
  console.log(`\nJIT Buffer Stock Required: ${calculateJITDelivery(jitDemand, InventoryNode.leadTimeDays)} units`);
}

evaluateInventoryHealth();
