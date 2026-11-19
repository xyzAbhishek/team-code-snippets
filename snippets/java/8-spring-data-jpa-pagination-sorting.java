@GetMapping("/paged")
public Page<Snippet> listPaged(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size) {
    Pageable pageable = PageRequest.of(page, size, Sort.by("updatedAt").descending());
    return snippetRepository.findAll(pageable);
}