Map<String, Double> revenueByCategory = orders.stream()
    .collect(Collectors.groupingBy(
        Order::getCategory,
        Collectors.summingDouble(Order::getTotalAmount)
    ));