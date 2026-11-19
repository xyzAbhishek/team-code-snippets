public static Specification<Item> hasCategory(String cat) {
    return (root, q, cb) -> (cat == null || cat.isBlank())
        ? null : cb.equal(cb.lower(root.get("category")), cat.toLowerCase());
}