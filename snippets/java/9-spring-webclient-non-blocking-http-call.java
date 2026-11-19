Mono<String> response = webClient.get()
    .uri("https://api.example.com/v1/orders/{id}", orderId)
    .retrieve()
    .bodyToMono(String.class)
    .timeout(Duration.ofSeconds(5))
    .retry(2);