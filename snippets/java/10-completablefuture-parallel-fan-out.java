CompletableFuture<User> userF = CompletableFuture.supplyAsync(() -> userService.get(id));
CompletableFuture<List<Order>> ordersF = CompletableFuture.supplyAsync(() -> orderService.list(id));
CompletableFuture.allOf(userF, ordersF).join();
return new DashboardDTO(userF.join(), ordersF.join());